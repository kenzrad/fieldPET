var db = require("../models");

module.exports = function(app) {
  // Get all bug data associated with a site

  app.get("/api/site", function(req, res) {
    db.Site.findAll({
      include: [db.Bugs]
    }).then(function(dbSite) {
      console.log(dbSite);
      res.json(dbSite);
    });
  });

  app.get('/api/site/:city_county/', function(req, res) {
    db.site.findAll({
      attributes: [req.params.city_county, "date"]
    }).then(function(dbSite) {
      console.log(dbSite);
      res.json(dbSite);
    })
    .catch(function(err){
      res.json(err);
    });
  });
};


