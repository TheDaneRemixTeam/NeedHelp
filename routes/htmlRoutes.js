/* eslint-disable prettier/prettier */
/* eslint-disable indent */
var db = require("../models");
const Op = require("sequelize").Op;
module.exports = function (app) {
    // Load index page
    app.get("/", function (req, res) {
        db.Post.findAll({ raw: true, where: { claimed: false } }).then(function (dbPost) {
            //console.log(dbPost);
            res.render("index", {
                gigs: dbPost
            });
        });
    });

    app.get("/create", function (req, res) {
        db.Post.findAll({}).then(function (dbPost) {
            res.render("gigcreate", {});
        });
    });

    app.get("/gigview/:id", function (req, res) {
        db.Post.findOne({ raw: true, where: { id: req.params.id } }).then(function (dbPost) {
            console.log(dbPost);
            res.render("gigview", {
                gigs: dbPost
            });
        });
    });


    app.get("/login", function (req, res) {
        db.Example.findAll({}).then(function (dbExamples) {
            res.render("login", {
                // msg: "Welcome!",
                // examples: dbExamples
            });
        });
    });

    app.get("/signup", function (req, res) {
        db.Example.findAll({}).then(function (dbExamples) {
            res.render("signup", {
                // msg: "Welcome!",
                // examples: dbExamples
            });
        });
    });

    app.get("/account", function (req, res) {
        let userId = 1;
        if (req.user && req.user.id) {
            userId = req.user.id;
        }
        console.log(`The user id is ${userId}`);
        // db.Post.findAll({}).then(results => {
        //     results.forEach(element => {
        //         db.User.findAll({ raw: true, where: { id: element.helperID } }).then(user => {
        //             console.log(user);
        //         })
        //     })
        // })
        db.Post.findAll({ raw: true, where: { UserId: userId } }).then(function (postedGigs) {
            db.Post.findAll({ raw: true, where: { helperID: userId } }).then(function (claimedGigs) {
                db.User.findOne({ raw: true, where: { id: userId } }).then(function (dbUser) {
                    let helperIds = [];
                    postedGigs.forEach(post => {
                        if (helperIds.indexOf(post.helperID) === -1) {
                            helperIds.push(post.helperID);
                        }
                    })
                    console.log("Helper IDs", helperIds);
                    db.User.findAll({raw: true, where: {id: {[Op.in]: helperIds}}}).then(function(helpers){
                        postedGigs.forEach(post => {
                            post.helper = helpers.find(helper => helper.id === post.helperID);
                        });
                        console.log("Posted Gigs", postedGigs)
                        // db.User.findAll({ raw: true, where: { id: helpId.body.helperID } }).then(function (help) {
                            res.render("account", {
                                user: dbUser, postedGigs, claimedGigs
                            });
                        // });
                    });
                });
            });

        });

    });

    // Load example page and pass in an example by id
    app.get("/example/:id", function (req, res) {
        // eslint-disable-next-line prettier/prettier
        db.Example.findOne({ where: { id: req.params.id } }).then(function (
            dbExample
        ) {
            res.render("example", {
                example: dbExample
            });
        });
    });

    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
        res.render("404");
    });

    // app.get("/account/:UserId", function(req, res) {
    // db.Post.findAll({ raw: true, where: { UserId: UserID } }).then(function(dbPost) {
    // console.log(dbPost);
    // res.render("account", {
    // gigs: dbPost
    // });
    // });
    // });
};