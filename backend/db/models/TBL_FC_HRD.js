/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TBL_FC_HRD', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		FCI_ID: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		RECORD_ENTRY_DATE: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		RECORD_ENTERED_BY: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'TBL_FC_HRD',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};
