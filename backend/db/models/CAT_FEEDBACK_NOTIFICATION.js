/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('catFeedbackNotification', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		description: {
			type: "NCHAR",
			allowNull: false,
			field: 'DESCRIPTION'
		},
	}, {
		tableName: 'CAT_FEEDBACK_NOTIFICATION',
		timestamps: true,
		underscored: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		deletedAt: false
	});
};
