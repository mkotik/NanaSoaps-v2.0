'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
    await queryInterface.bulkDelete('products', null, {});
    await queryInterface.bulkDelete('images', null, {});
    await queryInterface.bulkDelete('shipping_options', null, {});
    await queryInterface.bulkDelete('orders', null, {});
    await queryInterface.bulkDelete('orders_products', null, {});
  },

  async down(queryInterface, Sequelize) {},
};
