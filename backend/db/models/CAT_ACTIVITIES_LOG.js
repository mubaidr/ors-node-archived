/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('catActivitiesLog', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		activityId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_ACTIVITIES',
				key: 'ID'
			},
			field: 'ACTIVITY_ID'
		},
		loginId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TBL_LOGIN',
				key: 'ID'
			},
			field: 'LOGIN_ID'
		},
		activityTime: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'ACTIVITY_TIME'
		},
		remarks: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'REMARKS'
		},
	}, {
		tableName: 'CAT_ACTIVITIES_LOG',
		timestamps: true,
		underscored: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		deletedAt: false
	});
};
