const Ticket = require("../models/ticketModel.js");
const Customer = require("../models/userModel.js");
const AuthUser = require("../models/authModel.js");

const createTicket = async (req, res) => {
  try {
    const { name, phone, email } = req.body;
    const newCustomer = new Customer({ name, phone, email });
    const getCustomer = await newCustomer.save();

    // Assign ticket automatically to Admin
    const admin = await AuthUser.findOne({ role: "admin" });
    if (!admin) {
      return res.status(500).json({ message: "No admin available" });
    }

    const newTicket = new Ticket({
      customerId: getCustomer._id,
      assignedTo: admin._id, // assign to admin first
      status: "unresolved",
    });

    await newTicket.save();

    return res.status(201).json({
      message: "Ticket created successfully",
      data: newTicket,
    });
  } catch (error) {
    console.error("Create Ticket Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

const getAllTickets = async (req, res) => {
  try {
    let { status, search } = req.query; // e.g., ?status=open&search=64xxxxx

    const query = {};

    // Filter by status
    if (status && ["unresolved", "resolved"].includes(status)) {
      query.status = status;
    }

    // Search by ticket ID
    if (search && mongoose.Types.ObjectId.isValid(search)) {
      query._id = search;
    }

    // Fetch tickets with customer & assignedTo info
    const tickets = await Ticket.find(query)
      .populate("customerId", "name email")
      .populate("assignedTo", "name email role")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: tickets,
    });
  } catch (error) {
    console.error("Get All Tickets Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

const getTicketsByAssignee = async (req, res) => {
  try {
    const { assignedTo } = req.params;

    const tickets = await Ticket.find({ assignedTo })
      .populate("customerId", "name email")
      .populate("assignedTo", "name role email")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Tickets fetched successfully",
      data: tickets,
    });
  } catch (error) {
    console.error("Get Tickets By Assignee Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

const assignTicket = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const { memberId } = req.body;

    // check member exists
    const member = await AuthUser.findById(memberId);
    if (!member || member.role !== "member") {
      return res.status(400).json({ message: "Invalid team member" });
    }

    const updatedTicket = await Ticket.findByIdAndUpdate(
      ticketId,
      { assignedTo: memberId, status: "assigned" },
      { new: true }
    );

    if (!updatedTicket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    return res.status(200).json({
      message: "Ticket assigned successfully",
      data: updatedTicket,
    });
  } catch (error) {
    console.error("Assign Ticket Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const { status } = req.body;

    const allowedStatus = ["open", "assigned", "resolved"];
    if (!allowedStatus.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const ticket = await Ticket.findByIdAndUpdate(
      ticketId,
      { status },
      { new: true }
    );

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    return res.status(200).json({
      message: "Status updated successfully",
      data: ticket,
    });
  } catch (error) {
    console.error("Update Status Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createTicket,
  getAllTickets,
  getTicketsByAssignee,
  assignTicket,
  updateStatus,
};
