const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/", (req, res) => {
  res.json({ msg: "Nfl page works!" });
});

module.exports = router;