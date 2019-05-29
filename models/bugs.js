//We need to add validations and handle null for these, but we can do this later
//Also need to add createdAt for JAWSDB
var Site = require("./site.js")

module.exports = function(sequelize, DataTypes) {
  var Bugs = sequelize.define("Bugs", {
    site: DataTypes.STRING,
    date: DataTypes.STRING,
    B: DataTypes.INTEGER,
    BF: DataTypes.INTEGER,
    CL: DataTypes.INTEGER,
    CN: DataTypes.INTEGER,
    C: DataTypes.INTEGER,
    DD: DataTypes.INTEGER,
    F: DataTypes.INTEGER,
    GS: DataTypes.INTEGER,
    HFA: DataTypes.INTEGER,
    L: DataTypes.INTEGER,
    LS: DataTypes.INTEGER,
    M: DataTypes.INTEGER,
    MI: DataTypes.INTEGER,
    MC: DataTypes.INTEGER,
    MTF: DataTypes.INTEGER,
    OO: DataTypes.INTEGER,
    SC: DataTypes.INTEGER,
    SB: DataTypes.INTEGER,
    SF: DataTypes.INTEGER,
    W: DataTypes.INTEGER
  });

  //Associating Bugs with a Site and linking the foreign key situation
  Bugs.associate = function(models) {
    Bugs.belongsTo(models.Site, {
      defaultValue: 0,
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Bugs;
};
