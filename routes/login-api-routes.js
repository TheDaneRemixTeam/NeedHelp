/* eslint-disable prettier/prettier */
/* eslint-disable indent */
// Dependencies
var db = require("../models");
var passport = require("../config/passport.js");

module.exports = function(app) {
    // Route for signing up a new user
    app.post("/app/signup", function(req, res) {
        console.log(req.body);
    });
};