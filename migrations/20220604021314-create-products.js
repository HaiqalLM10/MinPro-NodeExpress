'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        validate: {
          min: 3,
          max: 50
        },
        type: Sequelize.STRING
      },
      quantity: {
        allowNull: false,
        validate: {
          min: 1
        },
        type: Sequelize.NUMERIC
      },
      price: {
        allowNull: false,
        validate: {
          min: 10000
        },
        type: Sequelize.NUMERIC
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};