/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('catActivities', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'TITLE'
		},
	}, {
		tableName: 'CAT_ACTIVITIES',
		timestamps: true,
		underscored: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		deletedAt: false
	});
};
