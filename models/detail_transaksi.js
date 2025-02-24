'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.menu,{foreignKey: "menuID", as: "detail_menu"})
      this.belongsTo(models.transaksi,{foreignKey: "transaksiID", as: "detail_transaksi"})
    }
  }
  
  detail_transaksi.init({
    transaksiID: DataTypes.INTEGER,
    menuID: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    harga_beli: DataTypes.DOUBLE
  }, {
    tanggal: DataTypes.DATE,
    stanID: DataTypes.INTEGER,
    siswaID: DataTypes.INTEGER,
    status: DataTypes.ENUM,
    sequelize,
    modelName: 'detail_transaksi',
    tableName: `detail_transaksi`
  });
  return detail_transaksi;
};