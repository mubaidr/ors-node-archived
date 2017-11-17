/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblFinalCandidate', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		appId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TBL_APPLICATIONS',
				key: 'ID'
			},
			field: 'APP_ID'
		},
		rollNo: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: '(N00/0000-000000',
			field: 'ROLL_NO'
		},
		recordEntryDate: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'RECORD_ENTRY_DATE'
		},
		marks: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MARKS'
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
		},
	}, {
		tableName: 'TBL_FINAL_CANDIDATE',
		timestamps: true,
		underscored: true,
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
		deletedAt: false
	});
};
