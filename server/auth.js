const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const getConnection = require('./database.js').getConnection;

const knex = getConnection();

passport.serializeUser(function(user, done) {
  done(null, user.username);
});

passport.deserializeUser(function(id, done) {
  knex.select('*').from('users').where("username", id).then(user=>done(null, user[0])).catch(err=>done(err,null));
});

passport.use(new LocalStrategy((username, password, done) => {
    knex.select('*').from('users').where("username", username)
    .then(((user) => {
        if (!user) {
        console.log('Incorrect username');
        
        return done(null, false, { message: 'Incorrect username.' });
      }
      user = user[0];
      user.id=user.username;
      delete user.password;
      console.log(user);
      done(null, user,{'confirmation':'success', 'result':user});
    })).catch(err => console.log('Didnt find User ',err));
  }
));