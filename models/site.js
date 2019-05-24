//Need to add createdAt for JAWSDB
//We may want to reorganize these data later (the header names aren't the best), but let's not worry about that now
module.exports = function(sequelize, DataTypes){
  var Site = sequelize.define("Site", {
    Code: DataTypes.STRING,
    Name: DataTypes.STRING,
    NameLong: DataTypes.STRING,
    Lat: DataTypes.STRING,
    Long: DataTypes.STRING,
    Cbseg: DataTypes.STRING,
    WaterBody: DataTypes.STRING,
    Description: DataTypes.STRING,
    Datum: DataTypes.STRING,
    CityCounty: DataTypes.STRING,
    Tidal: DataTypes.BOOLEAN,
    Comments: DataTypes.STRING,
    Fips: DataTypes.INTEGER,
    Huc12: DataTypes.STRING,
    State: DataTypes.STRING,
    Huc6Name: DataTypes.STRING
  });

  //Associate Site with Bugs so that we can delete associated Bugs upon deleting a given Site
  Site.associate = function(models) {
    Site.hasMany(models.Bugs, {
      onDelete: "cascade"
    });
  };

  return Site;
}
