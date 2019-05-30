var db = require("../models");
var fs = require("fs");
var csv = require("csv-parser");

var siteData = [];
var bugData = [];

db.sequelize.sync({ force: true }).then(function() {
  fs.createReadStream(__dirname + "/data/cmcStations.csv")  
  .pipe(csv())
  .on('data', (row) => {
    siteData.push(row);
  })
  .on('end', () => {
    db.Site.bulkCreate(siteData).then(createBugs);
});
})

function createBugs() {
  fs.createReadStream(__dirname + "/data/bugs.csv")  
  .pipe(csv())
  .on('data', (row) => {
    bugData.push(row);
  })
  .on('end', () => {
    db.Bugs.bulkCreate(bugData).then(bugData => {
    console.log(bugData)
  });
});
}
