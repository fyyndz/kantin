'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class diskon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.stan,{foreignKey: "stanID", as: "stan"})
      this.hasMany(models.menu_diskon,{foreignKey: "diskonID", as: "menu_diskon"})
    }
  }
  diskon.init({
    diskonID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nama_diskon: DataTypes.STRING,
    persentase_diskon: DataTypes.DOUBLE,
    tanggal_awal: DataTypes.DATE,
    tanggal_akhir: DataTypes.DATE,
    stanID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'diskon',
    tableName: `diskon`
  });
  return diskon;
};