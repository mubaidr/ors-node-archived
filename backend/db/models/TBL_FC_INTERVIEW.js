/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblFcInterview', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		fcId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TBL_FINAL_CANDIDATE',
				key: 'ID'
			},
			field: 'FC_ID'
		},
		marks: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MARKS'
		},
		interviewLocationTime: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_INTERVIEW_LOCATION_TIME',
				key: 'ID'
			},
			field: 'INTERVIEW_LOCATION_TIME'
		},
		absent: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'ABSENT'
		},
		remarks: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'REMARKS'
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
		tableName: 'TBL_FC_INTERVIEW',
		timestamps: true,
		underscored: true,
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
		deletedAt: false
	});
};
