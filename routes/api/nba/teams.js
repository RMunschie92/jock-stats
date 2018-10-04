const express = require("express");
const router = express.Router();
const request = require("request");

const nbaTeamData = require('../../../data/nbaData');

router.get("/", (req, res) => {
  res.json({ data: nbaTeamData  });
});

module.exports = router;
