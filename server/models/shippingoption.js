'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShippingOption extends Model {}
  ShippingOption.init(
    {
      shipping_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      shipping_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shipping_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cost: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'shipping_options',
      modelName: 'ShippingOption',
    }
  );
  return ShippingOption;
};
