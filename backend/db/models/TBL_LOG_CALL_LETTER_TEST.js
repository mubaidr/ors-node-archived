/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblLogCallLetterTest', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		cnic: {
			type: "NCHAR",
			allowNull: false,
			field: 'CNIC'
		},
		printTime: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '(getdate())',
			field: 'PrintTime'
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
