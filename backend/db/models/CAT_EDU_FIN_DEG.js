/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CAT_EDU_FIN_DEG', {
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
    CERTIFICATE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CAT_EDU_CERT_GRP',
        key: 'ID'
      }
    }
  }, {
    tableName: 'CAT_EDU_FIN_DEG'
  });
};
