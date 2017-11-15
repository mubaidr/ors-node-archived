/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CAT_ACTIVITIES_LOG_ADMIN', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ACTIVITY_ADMIN_ID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '(NULL)',
			references: {
				model: 'CAT_ACTIVITIES_ADMIN',
				key: 'ID'
			}
		},
		ACTIVITY_TIME: {
			type: DataTypes.DATE,
			allowNull: false
		},
		USERNAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ACTIVITY_DETAILS: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CREATED_AT: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '(getdate())'
		},
		UPDATED_AT: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '(getdate())'
		}
	}, {
		tableName: 'CAT_ACTIVITIES_LOG_ADMIN',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};
