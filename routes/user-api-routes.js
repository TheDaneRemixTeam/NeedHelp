// Dependencies
var db = require("../models");

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // save a new username
  app.post("/api/users", function(request, response) {
    db.User.create(request.body).then(function(results) {
      response.json(results);
    });
  });
};
