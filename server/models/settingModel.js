const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
  {
    backgroundColor: {
      type: String,
      default: "#ffffff",
    },
    headerColor: {
      type: String,
      default: "#000000",
    },
    replyTime: {
      type: Number,
      default: 2,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Setting", settingsSchema);
