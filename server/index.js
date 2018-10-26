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
const zipcodes = require('zipcodes');
const cities = require('all-the-cities');
const { User, Property } = require('../models/schema')

require('dotenv').config()


const app = express();


app.use(expressLogging(logger));
app.use(express.static(path.resolve(__dirname, "../react-client/dist")));

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
// parse application/json
app.use(bodyParser.json());
let cityState = cities.filter(cit => cit.name.match("Austin")).sort((a, b) => b.population - a.population)[0].adminCode;
console.log('testing',cityState);

const craigsList = new craigslist.Client({
  baseHost: 'craigslist.com',
});



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

//example query from the properties table
app.get('/api/properties', (req, res) => {
  Property.query().then(result => res.json(result))
});

//example query from a specific user to grab all properties that share ids
app.get('/api/:UserId/users', (req, res) => {
  User.query().findById(req.params.UserId).eager('property')
  .then(result => res.json(result))
});

app.post('/api/:UserId/users', (req, res) => {
  console.log(req.body);
  res.end();
});


app.delete('/api/:UserId/users', (req, res) => {
  console.log(req.body);
  res.end();
});

app.post('/api/search', (req, res) => {

  // Retrieves the state from the city name of the most populous city by that name
  let cityState = cities.filter(cit => cit.name.match(req.body.city)).sort((a, b) => b.population - a.population)[0].adminCode;

  //gets a generic zipCode if none is given
  let zipCode = zipcodes.lookupByName(req.body.city, cityState);

  const baseHost = req.body.baseHost || 'craigslist.org';
  const category = req.body.category || 'hhh';
  const maxAsk = req.body.maxAsk || '50000';
  const minAsk = req.body.minAsk || '0';
  const city = req.body.city.toLowerCase().replace(/\s+/g, '') || 'Austin';
  const postal =  `${zipCode[3].zip}`;
  const searchDistance = req.body.searchDistance || '25';

  //Search Query construction
  const searchQuery = {
    baseHost,
    category,
    city,
    maxAsk,
    minAsk,
    postal,
    searchDistance
  };

// Search Craigslist
  craigsList.search(searchQuery, '', (err, data) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      res.json(data);
    }
  });
});
// parse application/json
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, () => {
  console.log('listening on port 3000!');
});
