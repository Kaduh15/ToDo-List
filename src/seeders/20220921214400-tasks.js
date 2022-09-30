'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('tasks', [
      {
        userId: 1,
        nameTask: 'Lavar o carro'
      },
      {
        userId: 2,
        nameTask: 'Compras',
        description: 'Comprar um sapato novo que combine com minha bolsa'
      },
      {
        userId: 1,
        nameTask: 'fazer testes da aplicação',
        description: 'Fazer testes unitarios e de integração'
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('tasks', null, {});

  }
};
