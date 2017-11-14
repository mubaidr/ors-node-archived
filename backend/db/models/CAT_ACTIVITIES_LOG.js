/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CAT_ACTIVITIES_LOG', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ACTIVITY_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_ACTIVITIES',
				key: 'ID'
			}
		},
		LOGIN_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TBL_LOGIN',
				key: 'ID'
			}
		},
		ACTIVITY_TIME: {
			type: DataTypes.DATE,
			allowNull: true
		},
		REMARKS: {
			type: DataTypes.STRING,
			allowNull: true
		},
	}, {
		tableName: 'CAT_ACTIVITIES_LOG',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};
