'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ ShippingOption }) {
      this.belongsTo(ShippingOption, { foreignKey: 'shipping_id' });
      // define association here
    }
  }
  Order.init(
    {
      order_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
    },
    {
      sequelize,
      tableName: 'orders',
      modelName: 'Order',
    }
  );
  return Order;
};
