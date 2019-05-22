module.exports = function(sequelize, DataTypes){
    var streamTable = sequelize.define("streamTable", {
        watershed: DataTypes.STRING,
        county: DataTypes.STRING,
        stream: DataTypes.STRING,
    });
    return streamTable;
}
