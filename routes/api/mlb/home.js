const express = require("express");
const router = express.Router();
const request = require("request");

router.get('/', (req, res) => {
  res.json({ msg: "Mlb Home works!"});
});

module.exports = router;