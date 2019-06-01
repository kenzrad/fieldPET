//We need to add validations and handle null for these, but we can do this later
//Also need to add createdAt for JAWSDB
var Site = require("./site.js")

module.exports = function(sequelize, DataTypes) {
  var Bugs = sequelize.define("Bugs", {
    date: DataTypes.STRING,
    B: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isDecimal: false
      }
    },
    BF: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isDecimal: false
      }
    },
    CL: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isDecimal: false
      }
    },
    CN: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isDecimal: false
      }
    },
    C: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isDecimal: false
      }
    },
    DD: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isDecimal: false
      }
    },
    F: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isDecimal: false
      }
    },
    GS: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isDecimal: false
      }
    },
    HFA: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isDecimal: false
      }
    },
    L: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isDecimal: false
      }
    },
    LS: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isDecimal: false
      }
    },
    M: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isDecimal: false
      }
    },
    MI: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isDecimal: false
      }
    },
    MC: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isDecimal: false
      }
    },
    MTF: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isDecimal: false
      }
    },
    OO: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isDecimal: false
      }
    },
    SC: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isDecimal: false
      }
    },
    SB: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isDecimal: false
      }
    },
    SF: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isDecimal: false
      }
    },
    W: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isDecimal: false
      }
    }
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
