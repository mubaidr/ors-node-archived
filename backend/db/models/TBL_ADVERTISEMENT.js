/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TBL_ADVERTISEMENT', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ADV_NUMBER: {
			type: DataTypes.STRING,
			allowNull: false
		},
		DESCRIPTION: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ADV_DATE: {
			type: DataTypes.DATE,
			allowNull: false
		},
		ADV_DOCUMENT: {
			type: DataTypes.STRING,
			allowNull: false
		},
		CLOSING_DATE: {
			type: DataTypes.DATE,
			allowNull: false
		},
		LAST_UPDATE: {
			type: DataTypes.DATE,
			allowNull: true
		},
		ACTIVE: {
			type: DataTypes.BOOLEAN,
			allowNull: true
		},
		ADV_CODE: {
			type: "NCHAR",
			allowNull: true
		},
	}, {
		tableName: 'TBL_ADVERTISEMENT',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};
