const express = require("express");
const router = express.Router();
const settingsController = require("../controllers/settingController.js");
const auth = require("../middleware/auth.js");
const isAdmin = require("../middleware/isAdmin.js");

// Only admin should access update route
router.get("/", auth, settingsController.getSettings);
router.put("/", auth, isAdmin, settingsController.updateSettings);

module.exports = router;
