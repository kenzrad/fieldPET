var db = require('../models');

module.exports = function(app) {
    app.post("/api/Bugs", function(req, res) {
        db.Bugs.create(req.body).then(function(dbBugs) {
            res.json(dbBugs);
        });
    });

    //finding ALL bug data
    //?????? Do we need the include: db.Site?
    app.get("/api/Bugs", function(req, res) {
        db.Bugs.findAll({ 
            include: [db.Site]
        }).then(function(dbBugs) {
          console.log(dbBugs);
          res.json(dbBugs);
        });
    });

    //finding SPECIFIC bug data (like mayflies)
    //?????? Do we need the include: db.Site?
    app.get("/api/Bugs/:bugType", function(req, res) {
        db.Bugs.findAll({
            attributes: [bugType]
        }).then(function(dbBugs) {
          console.log(dbBugs);
          res.json(dbBugs);
        });
    });

    app.delete("/api/Bugs/:id", function(req, res) {
        db.Bugs.destroy({ where: { id: req.params.id } }).then(function(dbBugs) {
            res.json(dbBugs);
        });
    });
};