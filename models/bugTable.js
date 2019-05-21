module.exports = function(sequelize, DataTypes) {
  var bugTable = sequelize.define("bugTable", {
    site: DataTypes.STRING,
    date: DataTypes.STRING,
    beetles: DataTypes.INTEGER,
    blackflies: DataTypes.INTEGER,
    clams: DataTypes.INTEGER,
    common_netspinners: DataTypes.INTEGER,
    crayfish: DataTypes.INTEGER,
    dragonflies: DataTypes.INTEGER,
    flatworms: DataTypes.INTEGER,
    fw_shrimp: DataTypes.INTEGER,
    gilled_snails: DataTypes.INTEGER,
    gomphidae: DataTypes.INTEGER,
    hellgrammites: DataTypes.INTEGER,
    leeches: DataTypes.INTEGER,
    lunged_snails: DataTypes.INTEGER,
    mayflies: DataTypes.INTEGER,
    midges: DataTypes.INTEGER,
    caddisflies: DataTypes.INTEGER,
    frue_flies: DataTypes.INTEGER,
    other: DataTypes.INTEGER,
    scubs: DataTypes.INTEGER,
    sowbugs: DataTypes.INTEGER,
    stoneflies: DataTypes.INTEGER,
    true_bugs:DataTypes.INTEGER,
    worms: DataTypes.INTEGER
  });
  return bugTable;
};
