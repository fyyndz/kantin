'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('siswa', {
      siswaID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_siswa: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.TEXT
      },
      telepon: {
        type: Sequelize.STRING
      },
      userID: {
        type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'user',
            key: 'userID'
          }
      },
      foto: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('siswa');
  }
};