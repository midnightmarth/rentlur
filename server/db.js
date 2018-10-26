const express = require('express');
const { User, Property } = require('../models/schema');
const router = express.Router();

router.get('/:UserId', (req, res) => {
  User.query().findById(req.params.UserId).eager('property')
  .then(result => res.json(result))
});

router.post('/:UserId', (req, res) => {
  console.log(req.body);
  res.end();
});


router.delete('/:UserId', (req, res) => {
  console.log(req.body);
  res.end();
});

module.exports = router;