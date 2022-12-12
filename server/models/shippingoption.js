'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShippingOption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
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
