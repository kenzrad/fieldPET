var db = require("../models");

module.exports = function(app) {
  // Get all bug data associated with a site

  app.get("/api/site", function(req, res) {
    db.Site.findAll().then(function(dbSite) {
      res.json(dbSite);
    });
  });

  // app.get('/api/site/:location', function(req, res) {
  //   db.site.findAll({
  //     attributes: [req.params.location, "date"]
  //   }).then(function(dbSite) {
  //     console.log(dbSite);
  //     res.json(dbSite);
  //   })
  //   .catch(function(err){
  //     res.json(err);
  //   });
  // });
};


