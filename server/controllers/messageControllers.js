const Message = require("../models/messageModel");
const Ticket = require("../models/ticketModel");
const Setting = require("../models/settingModel");

const createMessage = async (req, res) => {
  try {
    const { ticketId, senderId, senderRole, message } = req.body;

    if (!ticketId || !senderId || !senderRole || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMessage = await Message.create({
      ticketId,
      senderId,
      senderRole,
      message,
    });

    // If STAFF replies → clear missed status
    if (senderRole === "staff") {
      await Ticket.findByIdAndUpdate(ticketId, {
        status: "assigned",
      });
    }

    res.status(201).json(newMessage);
  } catch (err) {
    console.log(err);

    res.status(500).json({ message: "Server error" });
  }
};

const getMessagesByTicket = async (req, res) => {
  try {
    const ticketId = req.params.ticketId;

    const messages = await Message.find({ ticketId }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (err) {
    console.log(err);

    res.status(500).json({ message: "Server error" });
  }
};

const checkMissedChat = async (req, res) => {
  try {
    const ticketId = req.params.ticketId;

    const ticket = await Ticket.findById(ticketId);

    if (!ticket) return res.status(404).json({ error: "Ticket not found" });

    const lastMessage = await Message.findOne({ ticketId }).sort({
      createdAt: -1,
    });

    const setting = await Setting.findOne({});
    const replyTime = setting?.replyTime || 5; // minutes

    if (lastMessage) {
      const now = new Date();
      const diffMinutes = (now - new Date(lastMessage.createdAt)) / (1000 * 60);

      if (
        lastMessage.senderRole === "customer" &&
        diffMinutes > replyTime &&
        ticket.isMissed !== true
      ) {
        ticket.isMissed = true;
        await ticket.save();
      }
    }

    res.json({ isMissed: ticket.isMissed });
  } catch (err) {
    console.log(err);

    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createMessage, getMessagesByTicket, checkMissedChat };
