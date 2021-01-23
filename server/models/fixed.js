"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class fixed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  fixed.init(
    {
      name: DataTypes.STRING,
      check: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "fixed",
    }
  );
  return fixed;
};
