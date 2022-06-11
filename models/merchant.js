'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Merchant.init({
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "password is required" },
        len: {
          args: [6, 100],
          msg: "password length is not in this range [6, 100]"
        }
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "name is required" },
        len: {
          args: [3, 100],
          msg: "name length is not in this range [3, 100]"
        }
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "address is required" },
      },
    },
    join_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: { msg: "join_date is required" },
      },
    },
    phone_number: {
      type: DataTypes.NUMERIC,
      allowNull: false,
      isInt: true,
      validate: {
        notNull: { msg: "phone_number is required" },
        isInt: { args: true, msg: "You must enter Phone Number" },
      },
    },
  }, {
    sequelize,
    modelName: 'Merchant',
  });

  return Merchant;
};
