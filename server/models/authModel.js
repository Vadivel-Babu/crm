const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
    minLength: 4,
  },
  role: {
    type: String,
    enum: ["admin", "member"],
  },
  passwordChangedAt: {
    type: Date,
    default: null,
  },
  createdAt: Date,
});

module.exports = mongoose.model("AuthUser", authSchema);
