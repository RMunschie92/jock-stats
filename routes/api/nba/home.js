const express = require("express");
const router = express.Router();
const request = require("request");

const password = "MYSPORTSFEEDS";
const apiKey = "73a08190-f41f-4bda-becd-af5c5a";

router.get('/', (req, res) => {
  res.json({ msg: "Nba page works!" });
});

module.exports = router;