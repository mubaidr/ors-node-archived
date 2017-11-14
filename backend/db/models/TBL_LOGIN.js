/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TBL_LOGIN', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		USERNAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		PASSWORD: {
			type: DataTypes.STRING,
			allowNull: false
		},
		EMAIL: {
			type: DataTypes.STRING,
			allowNull: false
		},
		QUESTION_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_QUESTIONS',
				key: 'ID'
			}
		},
		ANSWER: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Profile: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '((0.00))'
		},
		PICTURE_PATH: {
			type: DataTypes.STRING,
			allowNull: false
		},
		RECORD_ENTERED_BY: {
			type: DataTypes.STRING,
			allowNull: false
		},
		RECORD_ENTRY_DATE: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: '(getdate())'
		},
	}, {
		tableName: 'TBL_LOGIN',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};
