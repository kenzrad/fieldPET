var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};





////////Reading CSV Data and posting it to our database////////////
//still need to add posting stuff!

var csv = require('csv-parser');
var bugData = [];
var siteData = [];

//read csv file and create bugData object
fs.createReadStream(__dirname + "/data/bugs.csv")  
  .pipe(csv())
  .on('data', (row) => {
    bugData.push(row);
  })
  .on('end', () => {
    console.log('bugs.csv file successfully processed');
  }
);

//read csv file and create siteData object
fs.createReadStream(__dirname + "/data/cmcStations.csv")  
  .pipe(csv())
  .on('data', (row) => {
    siteData.push(row);
  })
  .on('end', () => {
    console.log('cmcStations.csv File successfully processed');
  }
);




////////////Usual Index Suspects for Sequelize//////////////////

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;