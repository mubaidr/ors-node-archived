/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CAT_FEEDBACK_TYPES', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DESCRIPTION: {
      type: "NCHAR",
      allowNull: false
    }
  }, {
    tableName: 'CAT_FEEDBACK_TYPES'
  });
};
