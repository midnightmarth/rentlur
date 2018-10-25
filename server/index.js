const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const keys = require('../credentials').web;

// Google Authentication "Stradegy"
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.client_id,
      clientSecret: keys.client_secret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
      console.log(done);
      return done(null, profile);
    },
  ),
);
//
const craigslist = require('node-craigslist');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'MemesAreCool',
  saveUninitialized: false,
  resave: false,
}));

// authentication
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);

app.get('/auth/google/callback', passport.authenticate('google'));

// parse application/json
app.use(bodyParser.json());

const craigsList = new craigslist.Client({
  baseHost: 'craigslist.com',
  city: 'Austin',
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
  console.log('made it into server')
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

  craigsList.search(searchQuery, '', (err, data) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log('data in the search', data);
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
