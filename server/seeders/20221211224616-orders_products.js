'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('orders_products', [
      {
        order_id: 1,
        product_id: 1,
        quantity: 1,
        soldFor: 7.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 1,
        product_id: 3,
        quantity: 2,
        soldFor: 8.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 2,
        product_id: 1,
        quantity: 5,
        soldFor: 7.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 2,
        product_id: 2,
        quantity: 1,
        soldFor: 7.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 2,
        product_id: 6,
        quantity: 2,
        soldFor: 9.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('orders_products', null, {});
  },
};
