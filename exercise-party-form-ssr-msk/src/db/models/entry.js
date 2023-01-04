'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Entry.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    game: DataTypes.TEXT,
    email: DataTypes.STRING,
    areaCode: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    phase: DataTypes.INTEGER,
    firstTime: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Entry',
  });
  return Entry;
};