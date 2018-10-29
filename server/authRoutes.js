// Modules
const express = require('express');

const router = express.Router();
const cookieParser = require('cookie-parser');
const expressLogging = require('express-logging');
const logger = require('logops');
const passport = require('passport');
const session = require('express-session');
const bcrypt = require('bcrypt');

const getConnection = require('./database.js').getConnection;

const knex = getConnection();

require('./auth');
// Need this require to use passport here.

// authentication
router.use(passport.initialize());
router.use(passport.session());
router.use(expressLogging(logger));

router.use(cookieParser());
router.use(
  session({
    secret: 'MemesAreCool',
    resave: false,
    saveUninitialized: true,
  }),
);
// With login, passport already knows where to get the credentials in the req object
// It takes the credentials and passes them over into the respective strategy, 'local'.
router.post('/login', passport.authenticate('local'), (req, res) => {
  if ((req.authInfo.confirmation === 'success')) {
    res.send({ data: req.authInfo.result });
  } else {
    console.log('Failure to authenticate');
    res.send({ data: 'Failure' });
  }
});

// In Logout, we use the passports function Logut() to tell passport to unauthenticate the user.
router.get('/logout', (req, res) => {
  console.log('requested to logout');
  req.logout();
  res.redirect('/');
});

// Signup just takes the info from req object and hashes the password to insert into the database.
router.post('/signup', (req, res) => {
  console.log('requested to signup');
  const { password } = req.body.password;
  const { username } = req.body.username;
  bcrypt.hash(password, 10, (err, hash) => {
    // puit in db
    if (err) {
      console.log(err);
      return;
    }
    console.log('encrypting password: ', password);
    knex('users')
      .insert([{ username, password: hash }])
      .then(response => res.send(JSON.stringify(response)))
      .catch(error => res.send(JSON.stringify(error)));
  });
});

module.exports = router;
