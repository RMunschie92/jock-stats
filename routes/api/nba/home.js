const express = require("express");
const router = express.Router();
const request = require("request");

router.get('/', (req, res) => {
  res.json({ msg: "Nba page works!" });
});

module.exports = router;