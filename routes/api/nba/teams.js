const express = require("express");
const router = express.Router();
const request = require("request");

const nbaTeamData = require('../../../data/nbaData');

router.get("/", (req, res) => {
  let atlanticDiv = [];
  let centralDiv = [];
  let southeastDiv = [];
  let northwestDiv = [];
  let pacificDiv = [];
  let southwestDiv = [];

  for (let i = 0; i < nbaTeamData.length; i++) {
    let team = nbaTeamData[i];
    if (team.division === 'Atlantic') {
      atlanticDiv.push(team);
    } else if (team.division === 'Central') {
      centralDiv.push(team);
    } else if (team.division === 'Southeast') {
      southeastDiv.push(team);
    } else if (team.division === 'Northwest') {
      northwestDiv.push(team);
    } else if (team.division === 'Pacific') {
      pacificDiv.push(team);
    } else {
      southwestDiv.push(team);
    }
  }

  res.json({ 
    atlanticDiv: atlanticDiv,
    centralDiv: centralDiv,
    southeastDiv: southeastDiv,
    northwestDiv: northwestDiv,
    pacificDiv: pacificDiv,
    southwestDiv: southwestDiv
  });
});

module.exports = router;
