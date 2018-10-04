const express = require("express");
const router = express.Router();
const request = require("request");

const password = "MYSPORTSFEEDS";
const apiKey = "73a08190-f41f-4bda-becd-af5c5a";

router.get("/", (req, res) => {

  let url = `https://api.mysportsfeeds.com/v2.0/pull/nba/2017-2018-regular/player_stats_totals.json`;
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

      // Point Totals
      let ptsTotals = [];
      players.forEach(player => {
        ptsTotals.push([
          player.stats.offense.pts,
          player.player.id,
          player.player.firstName,
          player.player.lastName,
          player.team.abbreviation
        ]);
      });

      ptsTotals.sort((a, b) => {
        return b[0] - a[0];
      });

      // Get only first 100 results
      ptsTotals = ptsTotals.slice(0, 101);

      // Points per game 
      let ptsPerGame = [];
      players.forEach(player => {
        ptsPerGame.push([
          player.stats.offense.ptsPerGame,
          player.player.id,
          player.player.firstName,
          player.player.lastName,
          player.team.abbreviation
        ]);
      });

      ptsPerGame.sort((a, b) => {
        return b[0] - a[0];
      });

      // Get only first 100 results
      ptsPerGame = ptsPerGame.slice(0, 101);

      // Rebounds per game
      let reboundsPerGame = [];
      players.forEach(player => {
        reboundsPerGame.push([
          player.stats.rebounds.rebPerGame,
          player.player.id,
          player.player.firstName,
          player.player.lastName,
          player.team.abbreviation
        ]);
      });

      reboundsPerGame.sort((a, b) => {
        return b[0] - a[0];
      });

      // Get only first 100 results
      reboundsPerGame = reboundsPerGame.slice(0, 101);

      // Assists per game
      let astPerGame = [];
      players.forEach(player => {
        astPerGame.push([
          player.stats.offense.astPerGame,
          player.player.id,
          player.player.firstName,
          player.player.lastName,
          player.team.abbreviation
        ]);
      });

      astPerGame.sort((a, b) => {
        return b[0] - a[0];
      });

      astPerGame = astPerGame.slice(0, 101);

      // Blocks per game
      let blkPerGame = [];
      players.forEach(player => {
        blkPerGame.push([
          player.stats.defense.blkPerGame,
          player.player.id,
          player.player.firstName,
          player.player.lastName,
          player.team.abbreviation
        ]);
      });

      blkPerGame.sort((a, b) => {
        return b[0] - a[0];
      })

      blkPerGame = blkPerGame.slice(0 ,101);

      // Steals per game 
      let stlPerGame = [];
      players.forEach(player => {
        stlPerGame.push([
          player.stats.defense.stlPerGame,
          player.player.id,
          player.player.firstName,
          player.player.lastName,
          player.team.abbreviation
        ]);
      });

      stlPerGame.sort((a, b) => {
        return b[0] - a[0];
      })

      stlPerGame = stlPerGame.slice(0, 101);

      // Field Goal Percentage 
      let fieldGoalPct = [];
      players.forEach(player => {
        // At least 300 made FGs to meet statistical minimum
        if (player.stats.fieldGoals.fgMade >= 300) {
          fieldGoalPct.push([
            player.stats.fieldGoals.fgPct,
            player.player.id,
            player.player.firstName,
            player.player.lastName,
            player.team.abbreviation
          ]);
        }
      });

      fieldGoalPct.sort((a, b) => {
        return b[0] - a[0];
      });

      fieldGoalPct = fieldGoalPct.slice(0, 101);

      // Three pointers made 
      let threePtMade = [];
      players.forEach(player => {
        threePtMade.push([
          player.stats.fieldGoals.fg3PtMade,
          player.player.id,
          player.player.firstName,
          player.player.lastName,
          player.team.abbreviation
        ]);
      });

      threePtMade.sort((a, b) => {
        return b[0] - a[0];
      })

      threePtMade = threePtMade.slice(0, 101);

      // Three Pointers Percentage 
      let threePtPct = [];
      players.forEach(player => {
        // At least 82 made three-point FGs to meet statistical minimum
        if (player.stats.fieldGoals.fg3PtMade >= 82) {
          threePtPct.push([
            player.stats.fieldGoals.fg3PtPct,
            player.player.id,
            player.player.firstName,
            player.player.lastName,
            player.team.abbreviation
          ]);
        }
      });

      threePtPct.sort((a, b) => {
        return b[0] - a[0];
      })

      let threePctLength = threePtPct.length;

      res.json({
        ptsTotals: ptsTotals,
        ptsPerGame: ptsPerGame,
        reboundsPerGame: reboundsPerGame,
        astPerGame: astPerGame,
        blkPerGame: blkPerGame,
        stlPerGame: stlPerGame,
        fieldGoalPct: fieldGoalPct,
        threePtMade: threePtMade,
        threePtPct: threePctLength
      });
    })
});

module.exports = router;
