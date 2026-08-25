'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductIngredient extends Model {
    static associate(models) {
      // Tabel penghubung (junction table), tidak perlu associate tambahan
    }
  }
  ProductIngredient.init({
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    ingredientId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'ProductIngredient',
    tableName: 'ProductIngredients'
  });
  return ProductIngredient;
};
