const express = require("express");
const router = express.Router();
const request = require("request");

const password = "MYSPORTSFEEDS";
const apiKey = "73a08190-f41f-4bda-becd-af5c5a";

// @route GET api/home
// @desc Tests home route
router.get('/', (req, res) => {
});

module.exports = router;