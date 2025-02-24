'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user,{foreignKey: "userID", as: "user"})
      this.hasMany(models.transaksi,{foreignKey: "siswaID", as: "transaksi"})

      // define association here
    }
  }
  siswa.init({
    siswaID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nama_siswa: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    telepon: DataTypes.STRING,
    userID: DataTypes.INTEGER,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'siswa',
    tableName: `siswa`
  });
  return siswa;
};