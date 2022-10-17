'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Authors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Authors.hasMany(models.Books, {
        foreignKey: {
          name: "authorId"
        }
      });
    }
  }
  Authors.init({
    name: DataTypes.STRING,
    bornOn: DataTypes.STRING,
    spouce: DataTypes.STRING,
    children: DataTypes.INTEGER,
    bornIn: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Authors',
  });
  return Authors;
};