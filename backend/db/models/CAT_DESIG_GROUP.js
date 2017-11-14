/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CAT_DESIG_GROUP', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		DESCRIPTION: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ABBRIV: {
			type: DataTypes.STRING,
			allowNull: true
		},
	}, {
		tableName: 'CAT_DESIG_GROUP',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};
