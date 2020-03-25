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
        var newUser = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone
        };
        db.User.create(newUser).then(function(result) {
            res.json(result);
        }); 
    });
};