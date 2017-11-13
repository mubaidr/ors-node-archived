/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CAT_MARITAL_STATUS', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DESCRIPTION: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'CAT_MARITAL_STATUS'
  });
};
