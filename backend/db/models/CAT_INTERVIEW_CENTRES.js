/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CAT_INTERVIEW_CENTRES', {
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
	}, {
		tableName: 'CAT_INTERVIEW_CENTRES',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};