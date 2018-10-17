const express = require("express");
const router = express.Router();
const request = require("request");

const password = "MYSPORTSFEEDS";
const apiKey = "73a08190-f41f-4bda-becd-af5c5a";

const nhlTeamList = require("../../../data/nhlData");

router.get("/", (req, res) => {
  let urls = [
    `https://api.mysportsfeeds.com/v2.0/pull/nba/players.json?team=11`, 
    `https://api.mysportsfeeds.com/v2.0/pull/nhl/2018-2019-regular/team_stats_totals.json?team=11`,
    `https://api.mysportsfeeds.com/v2.0/pull/nhl/2018-2019-regular/standings.json?team=11`
  ];
  let auth = "Basic " + Buffer.from(apiKey + ":" + password).toString("base64");
  let completedRequests = 0;
  let responses = [];
  let roster = [];
  let teamData;

  urls.forEach((url) => {
    let body = "";
    request.get({
      url: url,
      headers: {
        "Authorization": auth
      }
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

        // when both requests are complete
        if (completedRequests == urls.length) {

          let completedData = [];

          // loop through responses and push indices to completedData accordingly
          for (let i = 0; i < responses.length; i++) {
            if (responses[i].hasOwnProperty('teamStatsTotals')) {
              completedData[0] = responses[i];
            }
            else if (responses[i].hasOwnProperty('players')) {
              completedData[1] = responses[i]
            }
            else {
              completedData[2] = responses[i]
            }
          };

          let teamStats = completedData[0].teamStatsTotals[0].stats;
          let rawRosterData = completedData[1].players;
          let teamStandings = completedData[2].teams[0];

          // assign teamData based on match of params.id
          for (let i = 0; i < nhlTeamList.length; i++) {
            // change to req.params.id after testing
            if (nhlTeamList[i].id === 11) {
              teamData = nhlTeamList;
            }
          };

          // push each player object into templateData if it has a jerseyNumber
          rawRosterData.map(player => {
            if (player.player.jerseyNumber !== null) {
              roster.push(player.player);
            }
          });

          res.json({
            teamStats: teamStats,
            rawRosterData: rawRosterData,
            teamStandings: teamStandings,
            teamData: teamData
          });
        }
      });
  })
});

module.exports = router;