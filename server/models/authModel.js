const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
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
});

module.exports = mongoose.model("Auth", authSchema);
