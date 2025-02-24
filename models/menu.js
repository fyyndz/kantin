'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.menu_diskon,{foreignKey: "menuID", as: "menu_diskon"})
      this.hasMany(models.detail_transaksi,{foreignKey: "menuID", as: "transaksi_menu"})
    }
  }
  menu.init({
    menuID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nama_makanan: DataTypes.STRING,
    harga: DataTypes.DOUBLE,
    jenis: DataTypes.ENUM ('makanan','minuman'),
    foto: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    stanID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'menu',
    tableName: `menu`
  });
  return menu;
};