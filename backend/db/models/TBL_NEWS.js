/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblNews', {
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
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'DESCRIPTION'
		},
		status: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))',
			field: 'STATUS'
		},
	}, {
		tableName: 'TBL_NEWS',
		timestamps: true,
		underscored: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		deletedAt: false
	});
};
