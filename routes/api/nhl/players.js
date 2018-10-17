const express = require("express");
const router = express.Router();
const request = require("request");

const password = "MYSPORTSFEEDS";
const apiKey = "73a08190-f41f-4bda-becd-af5c5a";

router.get("/", (req, res) => {
  let url = `https://api.mysportsfeeds.com/v2.0/pull/nhl/2018-2019-regular/player_stats_totals.json?limit=20`;
  let auth = "Basic " + Buffer.from(apiKey + ":" + password).toString("base64");
  let body = '';

  request.get({
    url: url,
    headers: {
      "Authorization": auth
    }
  }).
    on('error', err => {
      console.error("Error", err.message);
    })
    .on('response', response => {
      console.log("statusCode", response.statusCode);
    })
    .on('data', chunk => {
      body += chunk;
    })
    .on('end', () => {
      let data = JSON.parse(body);
      let players = data.playerStatsTotals;

      res.json({ players: players });
    });
});

module.exports = router;