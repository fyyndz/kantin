'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.siswa, { foreignKey: "userID", as: "detail_siswa" })
      this.hasOne(models.stan, { foreignKey: "userID", as: "detail_stan" })

    }
  }
  user.init({
    userID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM('siswa', 'admin_stan')
  }, {
    sequelize,
    modelName: 'user',
    tableName: `user`
  });
  return user;
};
