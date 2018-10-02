const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

// Config bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const home = require('./routes/api/home');

// Use routes
app.use("/api/home", home);

app.get('/', (req, res) => {
  res.redirect('/api/home');
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));