const express = require("express");
const router = express.Router();
const request = require("request");

const password = "MYSPORTSFEEDS";
const apiKey = "73a08190-f41f-4bda-becd-af5c5a";

const nhlTeamData = require("../../../data/nhlData");

router.get("/", (req, res) => {
  let teamName;
  let teamData;
  let urls = [
    `https://api.mysportsfeeds.com/v2.0/pull/nhl/2018-2019-regular/player_stats_totals.json?player=brad-marchand`, 
    `https://api.mysportsfeeds.com/v2.0/pull/nhl/players.json?player=brad-marchand`
  ];
  let auth = "Basic " + Buffer.from(apiKey + ":" + password).toString("base64");
  let completedRequests = 0;
  let responses = [];

  urls.forEach(url => {
    let body = "";
    request.get({ 
        url: url, 
        headers: { Authorization: auth } 
      })
      .on("error", err => {
        console.error("Error: ", err.message);
      })
      .on("response", response => {
        console.log("statusCode: ", response.statusCode);
      })
      .on("data", chunk => {
        body += chunk;
      })
      .on("end", () => {
        body = JSON.parse(body);
        responses.push(body);
        completedRequests++;

        // // when both requests are completed
        if (completedRequests == urls.length) {
          // reverse responses array if playerData is 0 index
          if (responses[0].hasOwnProperty('players')) {
            responses = responses.reverse();
          }
          let playerStats = responses[0].playerStatsTotals[0].stats;
          let playerData = responses[1].players[0].player;

          // // get team name to send to view
          nhlTeamData.map(team => {
            if (team.abbreviation == playerData.currentTeam.abbreviation.toLowerCase()) {
              teamData = team;
              teamName = team.city + ' ' + team.name;
            }
          });

          res.json({
            playerStats: playerStats,
            playerData: playerData,
            teamData: teamData,
            teamName: teamName
          });
        }
      });
  });
});

module.exports = router;