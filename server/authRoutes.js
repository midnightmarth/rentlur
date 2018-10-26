const express = require('express');
const router = express.Router();
const cookieParser = require("cookie-parser");
//const keys = require("../credentials").web;
const expressLogging = require('express-logging');
const logger=require('logops');
const passport = require('passport');
const session = require("express-session");
// authentication

router.use(passport.initialize());
router.use(passport.session());
// parse application/json
router.use(expressLogging(logger));

router.use(cookieParser());
router.use(
  session({
    secret: "MemesAreCool",
    resave: false,
    saveUninitialized: true
  })
);

router.post('/login', (req, res) => {
  console.log('requested to login');
  res.end();
});
router.get('/logout', (req, res) => {
  console.log('requested to logout');
  res.end();
});
router.post('/signup', (req, res) => {
  console.log('requested to signup');
  res.end();
});


module.exports = router;