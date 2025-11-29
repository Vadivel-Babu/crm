const Setting = require("../models/settingModel.js");

const getSettings = async (req, res) => {
  try {
    let setting = await Setting.findOne();

    if (!setting) {
      // create default settings if none exist
      setting = await Setting.create({});
    }

    return res.status(200).json({
      message: "Settings fetched successfully",
      data: setting,
    });
  } catch (error) {
    console.error("Get Settings Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

const updateSettings = async (req, res) => {
  try {
    const { backgroundColor, headerColor, replyTime } = req.body;

    let setting = await Setting.findOne();

    if (!setting) {
      setting = await Setting.create({});
    }

    if (backgroundColor) setting.backgroundColor = backgroundColor;
    if (headerColor) setting.headerColor = headerColor;
    if (replyTime) setting.replyTime = replyTime;

    await setting.save();

    return res.status(200).json({
      message: "Settings updated successfully",
      data: setting,
    });
  } catch (error) {
    console.error("Update Settings Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getSettings, updateSettings };
