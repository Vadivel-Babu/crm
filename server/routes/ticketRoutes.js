const express = require("express");
const router = express.Router();

const TicketController = require("../controllers/ticketController.js");
const auth = require("../middleware/auth.js");

router.post("/", TicketController.createTicket);

router.get("/", TicketController.getAllTickets);

router.patch("/:ticketId/status", auth, TicketController.updateStatus);

router.patch("/:ticketId/assign", auth, TicketController.assignTicket);

module.exports = router;
