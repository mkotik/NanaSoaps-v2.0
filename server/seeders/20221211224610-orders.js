'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [
      {
        first_name: 'Marat',
        last_name: 'Kotik',
        email: 'mkotik97@gmail.com',
        shipping_city: 'Matawan',
        shipping_state: 'NJ',
        shipping_address: '14 Bramble Lane',
        shipping_zip: '07747',
        shipping_apartment: null,
        shipping_id: 1,
        shipping_country: 'United States',
        status: 'Active',
        tax_rate: 0.07,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Sarah',
        last_name: 'Silverman',
        email: 'ssilverman@gmail.com',
        shipping_city: 'New York',
        shipping_state: 'NY',
        shipping_address: '162 W 36th St',
        shipping_zip: '10018',
        shipping_apartment: '2B',
        shipping_id: 2,
        shipping_country: 'United States',
        status: 'Completed',
        tax_rate: 0.07,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
  },
};
