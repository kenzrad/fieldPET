var db = require("../models");

module.exports = function(app) {
  // Get all bug data associated with a site

  app.get("/api/site", function(req, res) {
    db.Site.findAll().then(function(dbSite) {
      res.json(dbSite);
    });
  });
};


