'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      this.belongsTo(Product, { foreignKey: 'product_id' });
      // define association here
    }
  }
  Image.init(
    {
      image_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      primary: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'images',
      modelName: 'Image',
    }
  );
  return Image;
};
