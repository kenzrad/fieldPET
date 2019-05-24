var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var DataTypes = Sequelize;
var fs = require("fs");
var csv = require("csv-parser");

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

var Site = sequelize.define("Site", {
  site: DataTypes.STRING,
  lat: DataTypes.STRING,
  long: DataTypes.STRING,
  water_body: DataTypes.STRING,
  city_county: DataTypes.STRING,
  state: DataTypes.STRING,
});


var siteData = [];

fs.createReadStream(__dirname + "/data/cmcStations.csv")  
  .pipe(csv())
  .on('data', (row) => {
    siteData.push(row);
  })
  .on('end', () => {
    Site.bulkCreate(siteData).then(siteData => {
    console.log(siteData)
  });
});


var Bugs = sequelize.define("Bugs", {
  site: DataTypes.STRING,
  date: DataTypes.STRING,
  beetles: DataTypes.INTEGER,
  blackflies: DataTypes.INTEGER,
  clams: DataTypes.INTEGER,
  common_netspinners: DataTypes.INTEGER,
  crayfish: DataTypes.INTEGER,
  dragonflies_damselflies: DataTypes.INTEGER,
  flatworms: DataTypes.INTEGER,
  fw_shrimp: DataTypes.INTEGER,
  gilled_snails: DataTypes.INTEGER,
  gomphidae: DataTypes.INTEGER,
  hellgrammites: DataTypes.INTEGER,
  leeches: DataTypes.INTEGER,
  lunged_snails: DataTypes.INTEGER,
  mayflies: DataTypes.INTEGER,
  midges: DataTypes.INTEGER,
  most_caddisflies: DataTypes.INTEGER,
  most_true_flies: DataTypes.INTEGER,
  other: DataTypes.INTEGER,
  scuds: DataTypes.INTEGER,
  sowbugs: DataTypes.INTEGER,
  stoneflies: DataTypes.INTEGER,
  true_bugs:DataTypes.INTEGER,
  worms: DataTypes.INTEGER,
  // SiteID: {
  //   type: DataTypes.INTEGER,
  //   defaultValue: 0,
  //   references: {
  //     model: Site,
  //     key: 'id',
  //   }
  // },
});

Site.associate = function(models) {
  Site.hasMany(models.Bugs);
};

Bugs.associate = function(models) {
  Bugs.belongsTo(models.Site, {
    defaultValue: 0,
    foreignKey: {
      allowNull: false
    }
  });
};

// Bugs.associate = function(models) {
//   Bugs.belongsTo(models.Site, {
//     onDelete: 'CASCADE',
//     hooks: true,
//     defaultValue: 0,
//     foreignKey: {
//       name: 'SiteID',
//       allowNull: false
//     },
//   });
// }

// Bugs.associate = function(models) {
//   Bugs.belongsTo(models.Site, {
//     foreignKey: {
//       allowNull: false
//     }
//   });
// };

var bugData = [];

fs.createReadStream(__dirname + "/data/bugs.csv")  
  .pipe(csv())
  .on('data', (row) => {
    bugData.push(row);
  })
  .on('end', () => {
    Bugs.bulkCreate(bugData).then(bugData => {
    console.log(bugData)
  });
});