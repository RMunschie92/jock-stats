const express = require("express");
const router = express.Router();
const request = require("request");

const nflTeamData = require("../../../data/nflData");

router.get('/', (req, res) => {

  let afcEast = [];
  let afcNorth = [];
  let afcSouth = [];
  let afcWest = [];
  let nfcEast = [];
  let nfcNorth = [];
  let nfcSouth = [];
  let nfcWest = [];

  for (let i = 0; i < nflTeamData.length; i++) {
    let team = nflTeamData[i];
    if (team.division === 'AFC East') {
      afcEast.push(team);
    } else if (team.division === 'AFC North') {
      afcNorth.push(team);
    } else if (team.division === 'AFC South') {
      afcSouth.push(team);
    } else if (team.division === 'AFC West') {
      afcWest.push(team);
    } else if (team.division === 'NFC East') {
      nfcEast.push(team);
    } else if (team.division === 'NFC North') {
      nfcNorth.push(team);
    } else if (team.division === 'NFC South') {
      nfcSouth.push(team);
    } else {
      nfcWest.push(team);
    }
  }

  res.json({ 
    afcEast: afcEast,
    afcNorth: afcNorth,
    afcSouth: afcSouth,
    afcWest: afcWest,
    nfcEast: nfcEast,
    nfcNorth: nfcNorth,
    nfcSouth: nfcSouth,
    nfcWest: nfcWest
  });
});

module.exports = router;