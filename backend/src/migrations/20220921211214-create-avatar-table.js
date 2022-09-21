'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('avatars', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      accessory: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'none',
      },
      clothing: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'shirt',
      },
      clothingColor: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'red',
      },
      eyebrows: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'raised',
      },
      eyes: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'normal',
      },
      hair: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'none',
      },
      hairColor: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'black',
      },
      hat: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'none',
      },
      hatColor: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'black',
      },
      lashes: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: false,
      },
      lipColor: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'red',
      },
      mouth: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'grin',
      },
      skinTone: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'yellow',
      },
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('avatars');
  }
};
