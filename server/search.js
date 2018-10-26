var express = require('express');
const cities = require('all-the-cities');
const zipcodes = require('zipcodes');
const craigslist = require('node-craigslist');
var router = express.Router();

const craigsList = new craigslist.Client({
  baseHost: 'craigslist.com',
});

router.post('/', (req, res) => {
console.log(req)
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
    searchDistance,
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

router.post('/details', (req, res) => {
  const listing = req.body.listing;
  // console.log(listing);
 craigsList.details(listing).then(details => {
  //  console.log('Got details', details);
   res.status(201).json(details);
 })
});

module.exports = router;