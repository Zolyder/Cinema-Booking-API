'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Auditoriums', [
      {
        name: 'Sala A',
        capacity: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sala B',
        capacity: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sala C',
        capacity: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Auditoriums', null, {});
  }
};
