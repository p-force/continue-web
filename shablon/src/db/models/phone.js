const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // who
      this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Phone.init({
    company: DataTypes.TEXT,
    nums: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Phone',
  });
  return Phone;
};
