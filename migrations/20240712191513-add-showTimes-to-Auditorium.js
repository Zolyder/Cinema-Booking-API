'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Auditoriums', 'showTimes', {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false,
      defaultValue: ['3:00 PM', '5:00 PM', '7:00 PM']
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Auditoriums', 'showTimes');
  }
};
