//I don't think we need this requirement, I commented out in case someone had need for it...the only requirement I have seen in html-routes is path, but I don't think we need that since we are not using the public folder?
// var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("*", function(req, res) {
    res.render("404");
  });
};
