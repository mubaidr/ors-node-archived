/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblFcHrd', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		fciId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'FCI_ID'
		},
		recordEntryDate: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'RECORD_ENTRY_DATE'
		},
		recordEnteredBy: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'RECORD_ENTERED_BY'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '(getdate())',
			field: 'CREATED_AT'
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '(getdate())',
			field: 'UPDATED_AT'
		}
	}, {
		tableName: 'TBL_FC_HRD',
		timestamps: true,
		underscored: true,
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
		deletedAt: false
	});
};
