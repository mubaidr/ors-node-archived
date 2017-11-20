/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblVacancyTestCentre', {
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
		testId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_TEST_CENTRES',
				key: 'ID'
			},
			field: 'TEST_ID'
		},
	}, {
		tableName: 'TBL_VACANCY_TEST_CENTRE',
		timestamps: true,
		underscored: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		deletedAt: false
	});
};
