/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblVacancySpecialization', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		spId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_SPECIALIZATION',
				key: 'ID'
			},
			field: 'SP_ID'
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
	}, {
		tableName: 'TBL_VACANCY_SPECIALIZATION',
		timestamps: true,
		underscored: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		deletedAt: false
	});
};
