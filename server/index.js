
//Modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//Local Files

const search = require('./search.js');
const authRoutes = require('./authRoutes.js');
const db = require('./db.js');

require('dotenv').config()
const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.use('/api/search', search);
app.use('/api/properties', db);
app.use('/api', authRoutes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../react-client/dist'));
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

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../react-client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  })
})
// parse application/json

app.use(express.static(path.resolve(__dirname, '../react-client/dist')));

// Setup

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, () => {
  console.log('listening on port 3000!');
});
