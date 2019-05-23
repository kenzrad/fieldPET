//We need to add validations and handle null for these, but we can do this later
//Also need to add createdAt for JAWSDB
module.exports = function(sequelize, DataTypes) {
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
    worms: DataTypes.INTEGER
  });

  //Associating Bugs with a Site and linking the foreign key situation
  Bugs.associate = function(models) {
    Bugs.belongsTo(models.Site, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Bugs;
};
