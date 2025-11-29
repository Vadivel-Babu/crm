const express = require("express");
const router = express.Router();

const TicketController = require("../controllers/ticketController.js");

router.post("/", TicketController.createTicket);

router.get("/", TicketController.getAllTickets);

router.patch("/:ticketId/status", TicketController.updateStatus);

router.patch("/:ticketId/assign", TicketController.assignTicket);

module.exports = router;
