/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblVacancyInterviewCentre', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		vacId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TBL_VACANCIES',
				key: 'ID'
			},
			field: 'VAC_ID'
		},
		interviewId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_INTERVIEW_CENTRES',
				key: 'ID'
			},
			field: 'INTERVIEW_ID'
		},
	}, {
		tableName: 'TBL_VACANCY_INTERVIEW_CENTRE',
		timestamps: true,
		underscored: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		deletedAt: false
	});
};
