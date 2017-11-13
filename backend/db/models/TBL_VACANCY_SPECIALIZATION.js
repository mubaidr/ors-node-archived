/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBL_VACANCY_SPECIALIZATION', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CAT_SPECIALIZATION',
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
    }
  }, {
    tableName: 'TBL_VACANCY_SPECIALIZATION'
  });
};
