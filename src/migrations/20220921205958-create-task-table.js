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
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        },
        onDelete: "CASCADE",
      },
      nameTask: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: 'tasks',
      underscored: true,
    }
    );

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');

  }
};
