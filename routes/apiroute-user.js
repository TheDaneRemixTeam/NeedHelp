// Dependencies
var db = require("../models");

module.exports = function(app) {
  // save a new username
  app.post("/api/user", function(request, response) {
    db.User.create(request.body).then(function(results) {
      response.json(results);
    });
  });
};
