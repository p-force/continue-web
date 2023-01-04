const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Card, { foreignKey: 'comment_id' });
      this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Comment.init({
    comment_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
