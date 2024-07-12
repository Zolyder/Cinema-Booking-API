'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [
      {
        bookerId: 1,
        auditoriumId: 1,
        seatId: 1,
        showTime: '3:00 PM',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bookerId: 2,
        auditoriumId: 2,
        seatId: 2,
        showTime: '5:00 PM',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
