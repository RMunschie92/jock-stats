const express = require("express");
const router = express.Router();
const request = require("request");

const nhlTeamData = require('../../../data/nhlData');

router.get("/", (req, res) => {
  res.json({ data: nhlTeamData });
});

module.exports = router;
