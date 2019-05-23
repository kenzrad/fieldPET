var db = require("../models");

module.exports = function(app) {
  // Get all bug data associated with a site
  app.get("/api/sites", function(req, res) {
    db.Site.findAll({
      include: [db.Bugs]
    }).then(function(dbSite) {
      console.log(dbSite);
      res.json(dbSite);
    });
  });
};

  //Commenting this out because I don't think we will be deleting posting new sites just yet...
    // app.post("/api/Bugs", function(req, res) {
    //   db.Bugs.create(req.body).then(function(dbBugs) {
    //     res.json(dbBugs);
    //   });
    // });

  // Not needed for now
    //   app.delete("/api/Bugs/:id", function(req, res) {
    //     db.Bugs.destroy({ where: { id: req.params.id } }).then(function(dbBugs) {
    //       res.json(dbBugs);
    //     });
    //   });
    // };
