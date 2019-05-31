//I don't think we need this requirement, I commented out in case someone had need for it...the only requirement I have seen in html-routes is path, but I don't think we need that since we are not using the public folder?
// var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("*", function(req, res) {
    res.render("404");
  });

  app.post('/api/login', function(req, res) {
    var user = {
      username: "adminPET",
      password: "666"
    }

    function authenticate(enteredUsername, enteredPassword) {
        if (enteredUsername === user.username && enteredPassword === user.password) {
          res.json(true);
        }
        else {
          res.json(false);
        }
    }
    authenticate(req.body.username, req.body.password);

  })
};
