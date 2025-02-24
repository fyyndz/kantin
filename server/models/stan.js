'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.transaksi,{foreignKey: "stanID", as: "transaksi_stan"})
      this.hasMany(models.menu,{foreignKey: "stanID", as: "menu_stan"})
      this.hasMany(models.diskon,{foreignKey: "stanID", as: "diskon_stan"})
    }
  }
  stan.init({
    stanID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nama_stan: DataTypes.STRING,
    nama_pemilik: DataTypes.STRING,
    telepon: DataTypes.STRING,
    userID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'stan',
    tableName: `stan`
  });
  return stan;
};