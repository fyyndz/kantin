'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('menu_diskon', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      menuID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'menu',
          key: 'menuID'
        }
      },
      diskonID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'diskon',
          key: 'diskonID'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('menu_diskon');
  }
};