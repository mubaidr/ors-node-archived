/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CAT_FEEDBACK_NOTIFICATION', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		DESCRIPTION: {
			type: "NCHAR",
			allowNull: false
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
		tableName: 'CAT_FEEDBACK_NOTIFICATION',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};
