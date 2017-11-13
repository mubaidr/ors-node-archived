/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CAT_SPEC_FIELDS', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DESCRIPTION: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CAT_SPECIALIZATION',
        key: 'ID'
      }
    }
  }, {
    tableName: 'CAT_SPEC_FIELDS'
  });
};
