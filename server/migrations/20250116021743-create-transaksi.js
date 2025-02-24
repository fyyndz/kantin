'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transaksi', {
      transaksiID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tanggal: {
        type: Sequelize.DATE
      },
      stanID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'stan',
          key: 'stanID'
        }
      },
      siswaID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'siswa',
          key: 'siswaID'
        }
      },
      status: {
        type: Sequelize.ENUM('dimasak','diantar','sampai')
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
    await queryInterface.dropTable('transaksi');
  }
};