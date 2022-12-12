'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        category_name: 'Body Bars',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: 'Face Bars',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: 'For Babies',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: 'Gift Boxes',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  },
};
