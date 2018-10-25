module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'rentlur',
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'process.env.DATABASE_URL'
    }
  }
};
