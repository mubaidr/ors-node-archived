/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CAT_SPECIALIZATION', {
    DESCRIPTION: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    RECORD_STATUS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'CAT_SPECIALIZATION'
  });
};
