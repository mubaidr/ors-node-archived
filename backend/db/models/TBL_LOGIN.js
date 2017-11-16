/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblLogin', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'USERNAME'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'NAME'
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'PASSWORD'
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'EMAIL'
		},
		questionId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_QUESTIONS',
				key: 'ID'
			},
			field: 'QUESTION_ID'
		},
		answer: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'ANSWER'
		},
		profile: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '((0.00))',
			field: 'Profile'
		},
		picturePath: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'PICTURE_PATH'
		},
		recordEnteredBy: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'RECORD_ENTERED_BY'
		},
		recordEntryDate: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: '(getdate())',
			field: 'RECORD_ENTRY_DATE'
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
		tableName: 'TBL_LOGIN',
		timestamps: true,
		underscored: true,
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
		deletedAt: false
	});
};
