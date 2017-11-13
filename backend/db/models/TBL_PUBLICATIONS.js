/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBL_PUBLICATIONS', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CANDIDATE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TBL_CANDIDATE',
        key: 'ID'
      }
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Journal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Authors: {
      type: DataTypes.STRING,
      allowNull: false
    },
    VolumeNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PageNumber: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'TBL_PUBLICATIONS'
  });
};
