/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblVacancyCertificate', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		certId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_EDU_CERT_GRP',
				key: 'ID'
			},
			field: 'CERT_ID'
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
		degreeSubjectId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'CAT_EDU_FIN_DEG_SUBJECTS',
				key: 'ID'
			},
			field: 'DEGREE_SUBJECT_ID'
		},
	}, {
		tableName: 'TBL_VACANCY_CERTIFICATE',
		timestamps: true,
		underscored: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		deletedAt: false
	});
};
