const Message = require("../models/messageModel");
const Setting = require("../models/settingModel");
const Ticket = require("../models/ticketModel");
const getWeekNumber = require("../utils/getWeekNumbers");

exports.getAnalytics = async (req, res) => {
  try {
    const settings = await Setting.findOne();
    const replyLimitMin = settings?.replyTime || 30;
    const replyLimitMs = replyLimitMin * 60 * 1000;

    const messages = await Message.find().sort({ createdAt: 1 }).lean();

    const totalMessages = messages.length;

    const customerMsgs = messages.filter((m) => m.senderRole === "customer");
    const agentMsgs = messages.filter((m) => m.senderRole !== "customer");

    let missedCount = {};
    let responseTimes = [];

    customerMsgs.forEach((msg) => {
      const week = getWeekNumber(new Date(msg.createdAt));
      if (!missedCount[week]) missedCount[week] = 0;

      const replies = agentMsgs
        .filter(
          (r) =>
            r.ticketId.toString() === msg.ticketId.toString() &&
            r.createdAt > msg.createdAt
        )
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

      const firstReply = replies[0] || null;

      let isMissed = false;

      if (!firstReply) {
        isMissed = true;
      } else {
        const responseTime =
          new Date(firstReply.createdAt) - new Date(msg.createdAt);

        if (responseTime > replyLimitMs) {
          isMissed = true;
        } else {
          responseTimes.push(responseTime);
        }
      }

      if (isMissed) missedCount[week]++;
    });

    /** -------------------------------
     *  🔟 Past 10 Weeks Missed Chat Array
     * ------------------------------- */
    const currentWeek = getWeekNumber(new Date());
    const last10Weeks = [];

    for (let i = 0; i < 10; i++) {
      const weekNumber = currentWeek - i;

      last10Weeks.push({
        week: weekNumber,
        missed: missedCount[weekNumber] || 0,
      });
    }

    last10Weeks.reverse();

    /** -------------------------------
     * 🟦  Average Response Time
     * ------------------------------- */
    let avgResponseTimeMs = 0;

    if (responseTimes.length > 0) {
      avgResponseTimeMs =
        responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length;
    }

    /** -------------------------------
     * 🟩 RESOLVED TICKET PERCENTAGE
     * ------------------------------- */
    const tickets = await Ticket.find().lean();

    const totalTickets = tickets.length;
    const resolvedTickets = tickets.filter(
      (t) => t.status === "resolved"
    ).length;

    const resolvedPercentage =
      totalTickets === 0
        ? 0
        : Math.round((resolvedTickets / totalTickets) * 100);

    /** -------------------------------
     * RETURN RESPONSE
     * ------------------------------- */
    return res.json({
      success: true,
      data: {
        totalMessages,
        missedChatsLast10Weeks: last10Weeks,
        avgResponseTimeMs,
        avgResponseTimeMinutes: Math.round(avgResponseTimeMs / 60000),

        // NEW FIELD
        resolvedPercentage,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Analytics failed" });
  }
};
