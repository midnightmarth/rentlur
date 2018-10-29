const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const getConnection = require('./database.js').getConnection;

const knex = getConnection();

passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser((id, done) => {
  knex
    .select('*')
    .from('users')
    .where('username', id)
    .then(user => done(null, user[0]))
    .catch(err => done(err, null));
});

// when the login route is used, the function takes the username and tries to find it in the db.
// If it doesnt, it returns an error.
// When it does find the username in the database, I use bcrypt.compare to compare the inputed
// password and the existing password.
// Returns the user if the passwords match. Will return an error when the passwords dont match.
passport.use(
  new LocalStrategy((username, password, done) => {
    knex
      .select('*')
      .from('users')
      .where({ username })
      .then((user) => {
        if (!user) {
          console.log('Incorrect username');

          return done(null, false, { message: 'Incorrect username.' });
        }
        bcrypt.compare(password, user[0].password, (err, res) => {
          console.log(res);
          if (res) {
            user = user[0];
            user.id = user.id;
            delete user.password;
            done(null, user, { confirmation: 'success', result: user });
          } else {
            done(err, null, { confirmation: 'failure', result: null });
          }
        });
      })
      .catch((err) => {
        console.log('Didnt find User ');
        done(err, null, { confirmation: 'failure', result: null });
      });
  }),
);
