'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [
      {
      name: 'John',
      email: 'john@example.com',
      password: 'password',
    },
    {
      name: 'Mary',
      email: 'mary@example.com',
      password: 'password',
    },
    {
      name: 'Ricardo',
      email: 'ricardo@example.com',
      password: 'password',
    }
  ], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});

  }
};
