/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CAT_DIVISION', {
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
    tableName: 'CAT_DIVISION'
  });
};
