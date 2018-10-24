const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const craigslist = require('node-craigslist');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

let client = new craigslist.Client({
  baseHost: 'craigslist.com',
  city: 'Austin',
})

//authentication
app.post('/api/login', (req, res) =>{
  console.log('requested to login');
  res.end
})
app.get('/api/logout', (req, res) =>{
  console.log('requested to logout');
  res.end
})
app.post('/api/signup', (req, res) =>{
  console.log('requested to signup');
  res.end
})
//

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
  
app.post('/api/search', (req, res) => {
  const baseHost = req.body.baseHost || 'craigslist.org';
  const category = req.body.category || 'hhh';
  const maxAsk = req.body.maxAsk || '50000';
  const minAsk = req.body.minAsk || '0';
  const city = req.body.city || 'Austin';
  const postal = req.body.postal || '78701';
  const searchDistance = req.body.searchDistance || '25';

  const searchQuery = {
    baseHost,
    category,
    city,
    maxAsk,
    minAsk,
    postal,
    searchDistance,
  };

  client.search(searchQuery, '', (err, data) => {
    console.log(data);
    res.status(201).end(JSON.stringify(data));
  
  })
})

});
console.log(path.resolve(__dirname, '../react-client/dist'));
app.use(express.static(path.resolve(__dirname, '../react-client/dist')));

// parse application/json

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
