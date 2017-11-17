/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('catActivitiesLogAdmin', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		activityAdminId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '(NULL)',
			references: {
				model: 'CAT_ACTIVITIES_ADMIN',
				key: 'ID'
			},
			field: 'ACTIVITY_ADMIN_ID'
		},
		activityTime: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'ACTIVITY_TIME'
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'USERNAME'
		},
		activityDetails: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ACTIVITY_DETAILS'
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
		},
	}, {
		tableName: 'CAT_ACTIVITIES_LOG_ADMIN',
		timestamps: true,
		underscored: true,
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
		deletedAt: false
	});
};
