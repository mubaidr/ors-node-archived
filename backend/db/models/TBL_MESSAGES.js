/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TBL_MESSAGES', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		SUBJECT: {
			type: DataTypes.STRING,
			allowNull: false
		},
		MESSAGE: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'TBL_MESSAGES',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};
