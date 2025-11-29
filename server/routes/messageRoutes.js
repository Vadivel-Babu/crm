const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageControllers.js");

router.post("/send", messageController.createMessage);
router.get("/:ticketId", messageController.getMessagesByTicket);
router.get("/:ticketId/check", messageController.checkMissedChat);

module.exports = router;
