const express = require("express");
const router = express.Router();
const request = require("request");

const nhlTeamData = require('../../../data/nhlData');

router.get("/", (req, res) => {
  let metroDiv = [];
  let atlanticDiv = [];
  let centralDiv = [];
  let pacificDiv = [];

  for (let i = 0; i < nhlTeamData.length; i++) {
    let team = nhlTeamData[i];
    if (team.division === 'Metropolitan') {
      metroDiv.push(team);
    } else if (team.division === 'Atlantic') {
      atlanticDiv.push(team);
    } else if (team.division === 'Central') {
      centralDiv.push(team);
    } else {
      pacificDiv.push(team);
    }
  }

  res.json({ 
    metroDiv: metroDiv,
    atlanticDiv: atlanticDiv,
    centralDiv: centralDiv,
    pacificDiv: pacificDiv
  });
});

module.exports = router;
