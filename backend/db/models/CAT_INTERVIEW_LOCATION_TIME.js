/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('catInterviewLocationTime', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		interviewLocationId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_INTERVIEW_LOCATION',
				key: 'ID'
			},
			field: 'INTERVIEW_LOCATION_ID'
		},
		interviewDate: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'INTERVIEW_DATE'
		},
		interviewTime: {
			type: "NCHAR",
			allowNull: false,
			field: 'INTERVIEW_TIME'
		},
		available: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))',
			field: 'AVAILABLE'
		},
		panel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PANEL'
		},
	}, {
		tableName: 'CAT_INTERVIEW_LOCATION_TIME',
		timestamps: true,
		underscored: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		deletedAt: false
	});
};
