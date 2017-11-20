/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('catSpecFields', {
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
		spId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_SPECIALIZATION',
				key: 'ID'
			},
			field: 'SP_ID'
		},
	}, {
		tableName: 'CAT_SPEC_FIELDS',
		timestamps: true,
		underscored: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		deletedAt: false
	});
};
