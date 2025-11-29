const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./config/db.js");
const authRoutes = require("./routes/authRoutes");
const ticketRoutes = require("./routes/ticketRoutes.js");
const settingRoutes = require("./routes/settingRoutes.js");
const messageRoutes = require("./routes/messageRoutes.js");
const analyticsRoutes = require("./routes/analyticsRoutes.js");

dotenv.config();
db();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/setting", settingRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/analytics", analyticsRoutes);

app.listen(PORT, () => {
  console.log(`app listening to http://localhost:${PORT}`);
});
