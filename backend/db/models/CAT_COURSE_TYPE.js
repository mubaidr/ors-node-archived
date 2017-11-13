/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CAT_COURSE_TYPE', {
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
    tableName: 'CAT_COURSE_TYPE'
  });
};
