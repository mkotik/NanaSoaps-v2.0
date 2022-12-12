'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('orders', {
      order_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shipping_city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shipping_state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shipping_address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shipping_zip: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shipping_apartment: {
        type: DataTypes.STRING,
      },
      shipping_country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shipping_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Active',
      },
      tax_rate: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      notes: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('orders');
  },
};
