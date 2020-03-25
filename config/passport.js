/* eslint-disable prettier/prettier */
/* eslint-disable indent */
// dependencies
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

// Import the models folder
var db = require("../models");

// Telling passport that we want to login using email
passport.use(new LocalStrategy(
   {
       usernameField: "email"
   },
   function(email, password, done) {
    // When the user tries to sign in
    db.User.findOne({
        where: {
            email: email
        }
    }).then(function(dbUser) {
        // If there is no user with the email
        if (!dbUser) {
            return done(null, false, {
                message: "Incorrect email."
            });
        } 
        // If the user is registered, but the password is inncorrect
        else if (!dbUser.validPassword(password)) {
            return done(null, false, {
                message: "Inncorrect password."
            });
        }
        // if none of the above return the user
        return done(null, dbUser);
    });
   } 
));
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  //
  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });
  //
  // Exporting our configured passport
  module.exports = passport;