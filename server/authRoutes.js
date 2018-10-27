const express = require('express');
const router = express.Router();
const cookieParser = require("cookie-parser");
//const keys = require("../credentials").web;
const expressLogging = require('express-logging');
const logger=require('logops');
const passport = require('passport');
const session = require("express-session");
const bcrypt = require('bcrypt');
require('./auth')

// authentication

router.use(passport.initialize());
router.use(passport.session());
router.use(expressLogging(logger));

router.use(cookieParser());
router.use(
  session({
    secret: "MemesAreCool",
    resave: false,
    saveUninitialized: true
  })
);


router.post('/login', passport.authenticate('local'), (req, res) => {
  console.log('Authenticated');
  //What do I send to let the client know it succeeded to login?
  res.send({ data: 'Authenticated' });
});

router.get('/logout', (req, res) => {
  console.log('requested to logout');
  res.end();
});

router.post('/signup', (req, res) => {
  console.log(req.body,'requested to signup');
  let password = req.body.password
  bcrypt.hash(password, 10, function (err, hash){
    //puit in db
  })
  res.end();
});


module.exports = router;