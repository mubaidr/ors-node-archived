/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBL_VACANCY_CERTIFICATE', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CERT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CAT_EDU_CERT_GRP',
        key: 'ID'
      }
    },
    VAC_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TBL_VACANCIES',
        key: 'ID'
      }
    },
    DEGREE_SUBJECT_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CAT_EDU_FIN_DEG_SUBJECTS',
        key: 'ID'
      }
    }
  }, {
    tableName: 'TBL_VACANCY_CERTIFICATE'
  });
};
