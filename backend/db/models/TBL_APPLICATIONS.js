/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TBL_APPLICATIONS', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		VAC_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TBL_VACANCIES',
				key: 'ID'
			}
		},
		STATUS: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_APP_STATUS',
				key: 'ID'
			}
		},
		RECORD_ENTRY_DATE: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		APPLICATION_NO: {
			type: DataTypes.STRING,
			allowNull: false
		},
		TEST_CENTRE: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TBL_VACANCY_TEST_CENTRE',
				key: 'ID'
			}
		},
		QUESTION_STATUS: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		LEDGER_REFERENCE_NO: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		IS_CHANNELED: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		},
		CANDIDATE_ID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'TBL_CANDIDATE',
				key: 'ID'
			}
		},
		UNDERTAKING: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		IS_PREFFERED: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0'
		},
		hasWorkedInSPD: {
			type: DataTypes.BOOLEAN,
			allowNull: true
		},
	}, {
		tableName: 'TBL_APPLICATIONS',
		timestamps: true,
		underscored: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		deletedAt: false
	});
};
