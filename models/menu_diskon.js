'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class menu_diskon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.menu,{foreignKey: "menuID", as: "menu"})
      this.belongsTo(models.diskon,{foreignKey: "diskonID", as: "diskon"})
    }
  }
  menu_diskon.init({
    menuID: DataTypes.INTEGER,
    diskonID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'menu_diskon',
    tableName: `menu_diskon`
  });
  return menu_diskon;
};