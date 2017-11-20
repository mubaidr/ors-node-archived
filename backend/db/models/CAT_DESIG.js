/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('catDesig', {
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
		groupId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_DESIG_GROUP',
				key: 'ID'
			},
			field: 'GROUP_ID'
		},
		scaleId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_PAYSCALE',
				key: 'ID'
			},
			field: 'SCALE_ID'
		},
		abbriv: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ABBRIV'
		},
	}, {
		tableName: 'CAT_DESIG',
		timestamps: true,
		underscored: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		deletedAt: false
	});
};
