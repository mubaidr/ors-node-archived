/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TBL_FINAL_CANDIDATE', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		APP_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TBL_APPLICATIONS',
				key: 'ID'
			}
		},
		ROLL_NO: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: '(N00/0000-000000'
		},
		RECORD_ENTRY_DATE: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		MARKS: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'TBL_FINAL_CANDIDATE',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};
