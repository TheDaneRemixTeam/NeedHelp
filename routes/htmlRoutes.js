/* eslint-disable prettier/prettier */
/* eslint-disable indent */
var db = require("../models");

module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        db.Post.findAll({ raw: true, where: { claimed: false } }).then(function(dbPost) {
            //console.log(dbPost);
            res.render("index", {
                gigs: dbPost
            });
        });
    });

    app.get("/create", function(req, res) {
        db.Post.findAll({}).then(function(dbPost) {
            res.render("gigcreate", {});
        });
    });

    app.get("/gigview/:id", function(req, res) {
        db.Post.findOne({ raw: true, where: { id: req.params.id } }).then(function(dbPost) {
            console.log(dbPost);
            res.render("gigview", {
                gigs: dbPost
            });
        });
    });


    app.get("/login", function(req, res) {
        db.Example.findAll({}).then(function(dbExamples) {
            res.render("login", {
                // msg: "Welcome!",
                // examples: dbExamples
            });
        });
    });

    app.get("/signup", function(req, res) {
        db.Example.findAll({}).then(function(dbExamples) {
            res.render("signup", {
                // msg: "Welcome!",
                // examples: dbExamples
            });
        });
    });

    app.get("/account", function(req, res) {
        db.Example.findAll({}).then(function(dbExamples) {
            res.render("account", {
                // msg: "Welcome!",
                // examples: dbExamples
            });
        });
    });

    // Load example page and pass in an example by id
    app.get("/example/:id", function(req, res) {
        // eslint-disable-next-line prettier/prettier
        db.Example.findOne({ where: { id: req.params.id } }).then(function(
            dbExample
        ) {
            res.render("example", {
                example: dbExample
            });
        });
    });

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};