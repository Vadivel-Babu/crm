const express = require("express");
const router = express.Router();
const settingsController = require("../controllers/settingController.js");

// Only admin should access update route
router.get("/", settingsController.getSettings);
router.put("/", settingsController.updateSettings);

module.exports = router;
