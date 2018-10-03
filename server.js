const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

// Config bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const homeRoute = require('./routes/api/home');
// MLB routes
const mlbHomeRoute = require('./routes/api/mlb/home');
// NBA routes
const nbaHomeRoute = require('./routes/api/nba/home');
// NHL routes
const nhlHomeRoute = require("./routes/api/nhl/home");
// NFL routes
const nflHomeRoute = require("./routes/api/nfl/home");

// Use routes
app.use("/api/home", homeRoute);
  // Use MLB routes
  app.use("/api/mlb/home", mlbHomeRoute);
  // Use NBA routes
  app.use("/api/nba/home", nbaHomeRoute);
  // Use NHL routes
  app.use("/api/nhl/home", nhlHomeRoute);
  // Use NFL routes
  app.use("/api/nfl/home", nflHomeRoute);

app.get('/', (req, res) => {
  res.redirect('/api/home');
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));