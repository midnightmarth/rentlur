const express = require('express');
const { User } = require('../models/schema');

const router = express.Router();
require('dotenv').config();

router.get('/:UserId', (req, res) => {
  User.query()
    .findById(req.params.UserId)
    .eager('property')
    .then(result => res.json(result));
});

router.post('/:UserId', async (req, res) => {
  const user = await User.query().findById(req.params.UserId);
  await console.log(req.body);
  await user
    .$relatedQuery('property')
    .allowInsert('[pid, location, title, price, url, hasPic, date, category]')
    .insert(req.body);

  res.send('Complete');
});

router.delete('/:UserId/:propertyId', async (req, res) => {
  const user = await User.query().findById(req.params.UserId);
  await user.$relatedQuery('property').deleteById(req.params.propertyId);
  res.send('Deleted');
});

module.exports = router;
