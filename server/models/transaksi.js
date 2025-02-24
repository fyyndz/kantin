'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.siswa,{foreignKey: "siswaID", as: "transaksi_siswa"})
      this.belongsTo(models.stan,{foreignKey: "stanID", as: "transaksi_stan"})
      this.hasMany(models.detail_transaksi,{foreignKey: "transaksiID", as: "transaksi_detail"})
    }
  }
  transaksi.init({
    transaksiID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    tanggal: DataTypes.DATE,
    stanID: DataTypes.INTEGER,
    siswaID: DataTypes.INTEGER,
    status: DataTypes.ENUM ('dimasak','diantar','sampai'),
  }, {
    sequelize,
    modelName: 'transaksi',
    tableName: `transaksi`
  });
  return transaksi;
};