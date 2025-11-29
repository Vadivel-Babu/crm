const mongoose = require("mongoose");

async function connectDB() {
  try {
    const con = await mongoose.connect(process.env.MONGODB_URI);
    console.log("db connected " + con.connection.host);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = connectDB;
