/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CAT_DESIG_GROUP', {
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
    ABBRIV: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'CAT_DESIG_GROUP'
  });
};
