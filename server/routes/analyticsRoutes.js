const express = require("express");
const router = express.Router();
const analyticsController = require("../controllers/getAnalyticsControllers");

router.get("/", analyticsController.getAnalytics);

module.exports = router;
