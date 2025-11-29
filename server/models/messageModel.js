const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  ticketId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ticket",
    required: true,
  },

  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  senderRole: {
    type: String,
    enum: ["customer", "staff"],
    required: true,
  },

  message: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Message", MessageSchema);
