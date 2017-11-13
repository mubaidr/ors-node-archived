/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CAT_EDU_FIN_DEG_SUBJECTS', {
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
    DEGREE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CAT_EDU_FIN_DEG',
        key: 'ID'
      }
    }
  }, {
    tableName: 'CAT_EDU_FIN_DEG_SUBJECTS'
  });
};
