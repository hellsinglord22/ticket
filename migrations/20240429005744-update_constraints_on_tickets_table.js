'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Tickets', 'created_by', {
      type: Sequelize.INTEGER,
      allowNull: false
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Tickets', 'created_by', {
      type: Sequelize.INTEGER,
      allowNull: true
    });
  }
};
