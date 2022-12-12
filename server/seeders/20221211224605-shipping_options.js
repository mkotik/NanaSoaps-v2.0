'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('shipping_options', [
      {
        shipping_name: 'Standard Shipping',
        shipping_description: '4-7 Business Days',
        cost: 4.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shipping_name: 'Priority Shipping',
        shipping_description: '3-5 Business Days',
        cost: 9.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        shipping_name: '2-Day Shipping',
        shipping_description: '2 Business Days',
        cost: 15.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('shipping_options', null, {});
  },
};
