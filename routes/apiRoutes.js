var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/bugTable", function(req, res) {
    db.Example.findAll({}).then(function(dbBugTables) {
      res.json(dbBugTables);
    });
  });

  // Create a new example
  app.post("/api/bugTable", function(req, res) {
    db.bugTable.create(req.body).then(function(dbBugTable) {
      res.json(dbBugTable);
    });
  });

  // Delete an example by id
  app.delete("/api/bugTable/:id", function(req, res) {
    db.BugTable.destroy({ where: { id: req.params.id } }).then(function(dbBugTable) {
      res.json(dbBugTable);
    });
  });
};
