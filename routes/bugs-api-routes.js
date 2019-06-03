var db = require('../models');

module.exports = function(app) {
    app.post("/api/bugs", function(req, res) {
        db.Bugs.create(req.body).then(function(dbBugs) {
            res.json(dbBugs);
        });
    });

    //finding ALL bug data
    app.get("/api/bugs", function(req, res) {
        db.Bugs.findAll({ 
            include: [db.Site]
        }).then(function(dbBugs) {
          res.json(dbBugs);
        });
    });

    //finding SPECIFIC bug data (like mayflies)
    //?????? Do we need the include: db.Site?
    app.get("/api/bugs/:type", function(req, res) {
        db.Bugs.findAll({
            attributes: [req.params.type, "date"]
        }).then(function(dbBugs) {
          console.log(dbBugs);
          res.json(dbBugs);
        })
        .catch(function(err) {
            res.json(err);
        });
    });

    app.delete("/api/bugs/:id", function(req, res) {
        db.Bugs.destroy({ where: { id: req.params.id } }).then(function(dbBugs) {
            res.json(dbBugs);
        });
    });
};