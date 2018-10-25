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

app.get('/api/logout', (req, res) => {
  console.log('requested to logout');
  res.end();
});
app.post('/api/signup', (req, res) => {
  console.log('requested to signup');
  res.end();
});
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
