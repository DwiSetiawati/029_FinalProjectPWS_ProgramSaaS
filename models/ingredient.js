'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ingredient.belongsToMany(models.Product, {
        through: models.ProductIngredient,
        foreignKey: 'ingredientId',
        otherKey: 'productId'
      });
    }
  }
  Ingredient.init({
    name: DataTypes.STRING,
    benefits: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};