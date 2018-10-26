const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const keys = require("../credentials").web;
const expressLogging = require('express-logging');
const logger=require('logops');
require('./auth');
const passport = require('passport')

const craigslist = require("node-craigslist");

const app = express();


app.use(expressLogging(logger));
app.use(express.static(path.resolve(__dirname, "../react-client/dist")));

const craigsList = new craigslist.Client({
  baseHost: "craigslist.com",
  city: "Austin"
});

app.use(cookieParser());
app.use(
  session({
    secret: "MemesAreCool",
    resave: false,
    saveUninitialized: true
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
// authentication
app.post("/api/login", passport.authenticate('local'), (req, res) => {
  console.log('Authenticated');
  //What do I send to let the client know it succeeded to login?
  res.send({ data: 'Authenticated' });
});


app.get("/api/logout", (req, res) => {
  console.log("requested to logout");
  res.end();
});
app.post("/api/signup", (req, res) => {
  console.log("requested to signup");
  res.end();
});
//

app.post("/api/search", (req, res) => {
  console.log("made it into server");
  const baseHost = req.body.baseHost || "craigslist.org";
  const category = req.body.category || "hhh";
  const maxAsk = req.body.maxAsk || "50000";
  const minAsk = req.body.minAsk || "0";
  const city = req.body.city || "Austin";
  const postal = req.body.postal || "78701";
  const searchDistance = req.body.searchDistance || "25";

  const searchQuery = {
    baseHost,
    category,
    city,
    maxAsk,
    minAsk,
    postal,
    searchDistance
  };

  craigsList.search(searchQuery, "", (err, data) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log("data in the search", data);
      res.json(data);
    }
  });
});

app.post("/api/:UserId", (req, res) => {
  console.log('posting users',req.body);
  res.end();
});

app.get("/api/:UserId", (req, res) => {
  console.log('getting usersss',req.params);
  res.end();
});

app.delete("/api/:UserId", (req, res) => {
  console.log('Deleteing something',req.body);
  res.end();
});
app.post("/api/properties", (req, res) => {
  console.log('getting properties',req.body);
  res.end();
});

// parse application/json
app.listen(3000, () => {
  console.log("listening on port 3000!");
});
