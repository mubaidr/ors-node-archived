/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblMessages', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		subject: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'SUBJECT'
		},
		message: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'MESSAGE'
		},
	}, {
		tableName: 'TBL_MESSAGES',
		timestamps: true,
		underscored: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		deletedAt: false
	});
};
