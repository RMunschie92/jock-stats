const express = require("express");
const router = express.Router();
const request = require("request");

const nhlTeamData = require('../../../data/nhlData');

router.get("/", (req, res) => {
  let metroTeams = [];
  let atlanticTeams = [];
  let centralTeams = [];
  let pacificTeams = [];

  for (let i = 0; i < nhlTeamData.length; i++) {
    let team = nhlTeamData[i];
    if (team.division === 'Metropolitan') {
      metroTeams.push(team);
    } else if (team.division === 'Atlantic') {
      atlanticTeams.push(team);
    } else if (team.division === 'Central') {
      centralTeams.push(team);
    } else {
      pacificTeams.push(team);
    }
  }

  let atlanticDiv = { name: 'Atlantic Division', teams: atlanticTeams };
  let metroDiv = { name: 'Metropolitan Division', teams: metroTeams };
  let centralDiv = { name: 'Central Division', teams: centralTeams };
  let pacificDiv = { name: 'Pacific Division', teams: pacificTeams };

  let conferences = [ { name: 'Eastern Conference', divisions: [ atlanticDiv, metroDiv ] }, { name: 'Western Conference', divisions: [ centralDiv, pacificDiv ] }];

  res.json({ 
    conferences: conferences
  });
});

module.exports = router;
