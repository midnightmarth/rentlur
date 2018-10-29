const knex = require('knex')({
  client: 'postgres',
  connection: {
    host: 'localhost',
    user: 'postgres',
    database: 'rentlur',
  },
  pool: { min: 1, max: 7 },
});

module.exports = {
  getConnection() {
    return knex;
  },
};
