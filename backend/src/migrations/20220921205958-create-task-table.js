'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      nameTask: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      desciption: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');

  }
};
