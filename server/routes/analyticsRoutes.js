const express = require("express");
const router = express.Router();
const analyticsController = require("../controllers/getAnalyticsControllers");
const auth = require("../middleware/auth.js");
router.get("/", auth, analyticsController.getAnalytics);

module.exports = router;
