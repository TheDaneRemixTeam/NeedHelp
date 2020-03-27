/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
// Dependencies
var db = require("../models");
var passport = require("../config/passport.js");

module.exports = function(app) {
    // Route for signing up a new user
    app.post("/api/signup", function(req, res) {
        console.log(req.body);
        db.User.create(req.body).then(function(result) {
            res.json(result);
        }); 
    });
};