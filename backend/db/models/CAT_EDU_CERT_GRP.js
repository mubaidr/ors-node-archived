/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('catEduCertGrp', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'DESCRIPTION'
		},
	}, {
		tableName: 'CAT_EDU_CERT_GRP',
		timestamps: true,
		underscored: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		deletedAt: false
	});
};
