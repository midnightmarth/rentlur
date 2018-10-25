require('dotenv').config()

const pg = require('pg')

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'rentlur',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + `?ssl=true`
  }
};
