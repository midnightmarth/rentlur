const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require("express-session");

const { User, Property } = require('../models/schema')
const search = require('./search');
const authRoutes = require('./authRoutes');
const db = require('./db');

require('dotenv').config()
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//Routes
app.use('/api/search', search);
app.use('/api/properties', db);
app.use('/api', authRoutes);

app.use(express.static(path.resolve(__dirname, '../react-client/dist')));

// parse application/json
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, () => {
  console.log('listening on port 3000!');
});
