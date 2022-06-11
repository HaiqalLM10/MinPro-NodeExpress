'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  
  Products.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "name is required" },
        len: {
          args: [3, 150],
          msg: "name length is not in this range [3, 50]"
        }
      },
    },
    quantity: {
      type: DataTypes.NUMERIC,
      allowNull: false,
      validate: {
        notNull: { msg: "quantity is required" },
        quantityValidation(){
          if(this.quantity < 1) throw new Error("quantity should be more than zero")
        }
      },
    },
    price: {
      type: DataTypes.NUMERIC,
      allowNull: false,
      validate: {
        notNull: { msg: "price is required" },
        priceValidation() {
          if(this.price < 10000) throw new Error("price should be more than equal 10000");
        }
      },
    },
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};