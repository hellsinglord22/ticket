'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@example.com',
      password: 'admin',
      type: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      email: 'student@example.com',
      password: 'student',
      type: 'student',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      email: 'tech@example.com',
      password: 'tech',
      type: 'tech',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};