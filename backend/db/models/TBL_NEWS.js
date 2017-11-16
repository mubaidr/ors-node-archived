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
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '(getdate())',
			field: 'CREATED_AT'
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '(getdate())',
			field: 'UPDATED_AT'
		}
	}, {
		tableName: 'TBL_NEWS',
		timestamps: true,
		underscored: true,
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
		deletedAt: false
	});
};
