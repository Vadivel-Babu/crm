const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AuthUser", // admin or member
      default: null,
    },

    status: {
      type: String,
      enum: ["unresolved", "resolved"],
      default: "unresolved",
    },
    isMissed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);
