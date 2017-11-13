/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBL_FC_TEST', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    FC_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TBL_FINAL_CANDIDATE',
        key: 'ID'
      }
    },
    MARKS: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '((0))'
    },
    TEST_LOCATION_TIME: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CAT_TEST_LOCATION_TIME',
        key: 'ID'
      }
    }
  }, {
    tableName: 'TBL_FC_TEST'
  });
};
