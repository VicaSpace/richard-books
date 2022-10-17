'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Books.init({
    authorId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    noOfPages: DataTypes.INTEGER,
    dateOfPublishing: DataTypes.STRING,
    illustrator: DataTypes.STRING,
    genre: DataTypes.STRING,
    publisher: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};