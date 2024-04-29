'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    // update all the status to open //
    await queryInterface.sequelize.query('UPDATE "Tickets" SET status = \'open\' WHERE status IS NULL');

    await queryInterface.changeColumn('Tickets', 'status', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'open',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Tickets', 'status', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  }
};
