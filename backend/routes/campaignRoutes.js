const Campaigns = require("../models/Campaigns");
const express = require("express");
const {
  getCampaigns,
  createCampaigns,
  deleteCampaigns,
} = require("../controllers/campaignController");

const router = express.Router();

router.route("/").get(getCampaigns).post(createCampaigns);
router.route("/:id").delete(deleteCampaigns);

module.exports = router;
