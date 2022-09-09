const mongoose = require("mongoose");

const campaignSchema = mongoose.Schema({
  name: { type: String, required: true },
  sdate: { type: Date, required: true },
  edate: { type: Date, required: true },
  budget: { type: Number, default: 3400, required: true },
  location: { type: String, required: true },
  platform: { type: String, required: true },
  status: {
    type: String,
    enum: ["Live now", "Paused", "Exhausted"],
    required: true,
  },
  working: {
    type: String,
    enum: ["On", "Off"],
    required: true,
  },
});

module.exports = mongoose.model("Campaign", campaignSchema);
