/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TBL_LOG_CALL_LETTER_TEST', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		CNIC: {
			type: "NCHAR",
			allowNull: false
		},
		PrintTime: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '(getdate())'
		},
	}, {
		tableName: 'TBL_LOG_CALL_LETTER_TEST',
		timestamps: true,
		underscored: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		deletedAt: false
	});
};
