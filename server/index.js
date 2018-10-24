const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

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
});
console.log(path.resolve(__dirname, '../react-client/dist'));
app.use(express.static(path.resolve(__dirname, '../react-client/dist')));

// parse application/json

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
