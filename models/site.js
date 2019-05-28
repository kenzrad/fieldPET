//Need to add createdAt for JAWSDB
//We may want to reorganize these data later (the header names aren't the best), but let's not worry about that now
module.exports = function(sequelize, DataTypes){
  var Site = sequelize.define("Site", {
    site: {
      type: DataTypes.STRING,
      unique: true
    },
    lat: DataTypes.STRING,
    long: DataTypes.STRING,
    water_body: DataTypes.STRING,
    city_county: DataTypes.STRING,
    state: DataTypes.STRING,
  });

  //Associate Site with Bugs
  Site.associate = function(models) {
    Site.hasMany(models.Bugs);
  };

  return Site;
}
