var db = require("../models");

module.exports = function(app) {
    // Get all examples
    app.get("/api/examples", function(req, res) {
        db.Example.findAll({}).then(function(dbExamples) {
            res.json(dbExamples);
        });
    });

    // Create a new example
    app.post("/api/examples", function(req, res) {
        db.Example.create(req.body).then(function(dbExample) {
            res.json(dbExample);
        });
    });

    // Delete an example by id
    app.delete("/api/examples/:id", function(req, res) {
        // eslint-disable-next-line prettier/prettier
        db.Example.destroy({ where: { id: req.params.id } }).then(function(
            dbExample
        ) {
            res.json(dbExample);
        });
    });

    app.get("/api/gigview/:id", function(req, res) {
        db.Post.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbPost) {
            console.log(dbPost);
            res.json(dbPost);
        });
    });

    app.post("/api/create", function(req, res) {
        if (req.user) {
            req.body.poster = req.user.firstname;
            req.body.UserId = req.user.id;
        } else {
            req.body.poster = "testuser";
        }
        db.Post.create(req.body).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    app.post("/api/gigview/:id", function(req, res) {
        if (req.user) {
            req.body.claimed = 1;
            req.body.helperID = req.user.id;
        }
        db.Post.update(req.body).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    app.put("/api/gigview/:id", function(req, res) {
        console.log("Claim", req.params, req.user)
        db.Post.update({
            helperID: req.user.id,
            claimed: 1
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(result) {res.json(result);});
        
    });
};