/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
// Dependencies
var db = require("../models");
var passport = require("../config/passport.js");

module.exports = function(app) {
    // route for logging in
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json("/");
    });

    // Route for signing up a new user 
    app.post("/api/signup", function(req, res) {
        console.log(req.body);
        db.User.create(req.body).then(function() {
            res.redirect(307, "/api/login");
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        }); 
    });

    // logging out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });

    // route for getting user data
    app.get("/api/user_data", function(req, res) {
        if (!req.user) {
            res.json({});
        }
        else {
            res.json(req.user);
        }
    });
};