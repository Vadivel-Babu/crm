const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageControllers.js");
const auth = require("../middleware/auth.js");

router.post("/send", messageController.createMessage);
router.get("/:ticketId", auth, messageController.getMessagesByTicket);
router.get("/:ticketId/check", auth, messageController.checkMissedChat);

module.exports = router;
