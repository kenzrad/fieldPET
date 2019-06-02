var db = require("../models");

module.exports = function(app) {
  // Get all bug data associated with a site

  app.get("/api/site", function(req, res) {
    db.Site.findAll().then(function(dbSite) {
      res.json(dbSite);
    });
  });

  //find all given bug data for a give site
  app.get("/api/site/:location/:bug", function(req, res) {
    console.log("in the api call"
    )
    var location = req.params.location;
    var bug = req.params.bug;

    db.Site.findAll({
      attributes: ["id", "site"],
      where: {
        city_county: location
      },
      include: [
        {
          model: db.Bugs,
          attributes: [bug, "date", "SiteId"]
        }
      ]
    }).then(function(dbSiteBug) {
      res.json(dbSiteBug);
    });
  });
};


