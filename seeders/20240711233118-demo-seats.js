'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seats = [];
    for (let i = 1; i <= 20; i++) {
      seats.push({
        number: i,
        auditoriumId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    for (let i = 1; i <= 20; i++) {
      seats.push({
        number: i,
        auditoriumId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    for (let i = 1; i <= 30; i++) {
      seats.push({
        number: i,
        auditoriumId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    return queryInterface.bulkInsert('Seats', seats, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Seats', null, {});
  }
};
