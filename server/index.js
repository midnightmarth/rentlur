const express = require('express');
const bodyParser = require('body-parser');
const craigslist = require('node-craigslist');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

let client = new craigslist.Client({
  baseHost: 'craigslist.com',
  city: 'Austin',
})


app.get('/api', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

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
    offset: '5'
  };

  client.search(searchQuery, '', (err, data) => {
    console.log(data);
    if(err){
      throw err
    } else {
      res.json(data);
    }

  
  })
})


app.listen(3000, function() {
  console.log(`listening on port 3000!`);
});

