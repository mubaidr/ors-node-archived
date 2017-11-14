/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CAT_ACTIVITIES', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		TITLE: {
			type: DataTypes.STRING,
			allowNull: false
		},
	}, {
		tableName: 'CAT_ACTIVITIES',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};