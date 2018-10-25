const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const craigslist = require('node-craigslist');
const zipcodes = require('zipcodes');
const cities = require('all-the-cities');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
let cityState = cities.filter(cit => cit.name.match("Austin")).sort((a, b) => b.population - a.population)[0].adminCode;
console.log('testing',cityState);

const craigsList = new craigslist.Client({
  baseHost: 'craigslist.com',
});




// authentication
app.post('/api/login', (req, res) => {
  console.log('requested to login');
  res.end();
});
app.get('/api/logout', (req, res) => {
  console.log('requested to logout');
  res.end();
});
app.post('/api/signup', (req, res) => {
  console.log('requested to signup');
  res.end();
});
//

app.post('/api/search', (req, res) => {
  /// some city parsing

  //let parseSearch = searchQuery.toLowerCase().replace(/\s+/g, '');
  console.log(req.body)
  let cityState = cities.filter(cit => cit.name.match(req.body.city)).sort((a, b) => b.population - a.population)[0].adminCode;
  let zipCode = zipcodes.lookupByName(req.body.city, cityState);

  console.log(zipCode[3].zip);
  
  //console.log('testing',cityState);

  
  //zipcodeLookup = zipcodes.lookupByName('')
  console.log(req.body)
  const baseHost = req.body.baseHost || 'craigslist.org';
  const category = req.body.category || 'hhh';
  const maxAsk = req.body.maxAsk || '50000';
  const minAsk = req.body.minAsk || '0';
  const city = req.body.city.toLowerCase().replace(/\s+/g, '') || 'Austin';
  const postal =  zipCode.toString() || '55555';
  const searchDistance = req.body.searchDistance || '25';
  // let cityInfo = cities.filter(cit => cit.name.match('sanantonio'));
  // console.log(cityInfo);
  const searchQuery = {
    baseHost,
    category,
    city,
    maxAsk,
    minAsk,
    postal,
    searchDistance,
  };

  craigsList.search(searchQuery, '', (err, data) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      //console.log('data in the search', data);
      res.json(data);
    }
  });
});

app.post('/api/:UserId', (req, res) => {
  console.log(req.body);
  res.end();
});

app.get('/api/:UserId', (req, res) => {
  console.log(req.body);
  res.end();
});

app.delete('/api/:UserId', (req, res) => {
  console.log(req.body);
  res.end();
});
app.post('/api/properties', (req, res) => {
  console.log(req.body);
  res.end();
});

app.use(express.static(path.resolve(__dirname, '../react-client/dist')));

// parse application/json
app.listen(3000, () => {
  console.log('listening on port 3000!');
});
