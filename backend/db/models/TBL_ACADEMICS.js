/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TBL_ACADEMICS', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		CANDIDATE_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TBL_CANDIDATE',
				key: 'ID'
			}
		},
		DEGREE_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_EDU_FIN_DEG',
				key: 'ID'
			}
		},
		MAJOR_SUBJECTS: {
			type: DataTypes.STRING,
			allowNull: false
		},
		BOARD_UNIV: {
			type: DataTypes.STRING,
			allowNull: false
		},
		PASSING_DATE: {
			type: DataTypes.DATE,
			allowNull: false
		},
		TOTAL_MARKS: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		},
		OBTAINED_MARKS: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		},
		TOTAL_GPA: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		},
		OBTAINED_GPA: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '((0))'
		},
		CRITERIA_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_CRITERIA_ACADEMICS',
				key: 'ID'
			}
		},
		PERCENTAGE: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '((0))'
		},
		DIVISION_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_DIVISION',
				key: 'ID'
			}
		},
		DURATION: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		DEGREE_SUBJECT_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_EDU_FIN_DEG_SUBJECTS',
				key: 'ID'
			}
		},
		DocumentName: {
			type: DataTypes.STRING,
			allowNull: true
		},
	}, {
		tableName: 'TBL_ACADEMICS',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};
