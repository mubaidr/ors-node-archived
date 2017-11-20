/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblAcademics', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		candidateId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TBL_CANDIDATE',
				key: 'ID'
			},
			field: 'CANDIDATE_ID'
		},
		degreeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_EDU_FIN_DEG',
				key: 'ID'
			},
			field: 'DEGREE_ID'
		},
		majorSubjects: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'MAJOR_SUBJECTS'
		},
		boardUniv: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'BOARD_UNIV'
		},
		passingDate: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'PASSING_DATE'
		},
		totalMarks: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))',
			field: 'TOTAL_MARKS'
		},
		obtainedMarks: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))',
			field: 'OBTAINED_MARKS'
		},
		totalGpa: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))',
			field: 'TOTAL_GPA'
		},
		obtainedGpa: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '((0))',
			field: 'OBTAINED_GPA'
		},
		criteriaId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_CRITERIA_ACADEMICS',
				key: 'ID'
			},
			field: 'CRITERIA_ID'
		},
		percentage: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '((0))',
			field: 'PERCENTAGE'
		},
		divisionId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_DIVISION',
				key: 'ID'
			},
			field: 'DIVISION_ID'
		},
		duration: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DURATION'
		},
		degreeSubjectId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_EDU_FIN_DEG_SUBJECTS',
				key: 'ID'
			},
			field: 'DEGREE_SUBJECT_ID'
		},
		documentName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'DocumentName'
		},
	}, {
		tableName: 'TBL_ACADEMICS',
		timestamps: true,
		underscored: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		deletedAt: false
	});
};
