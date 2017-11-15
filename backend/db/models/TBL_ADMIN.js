/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TBL_ADMIN', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		CNIC: {
			type: DataTypes.STRING,
			allowNull: false
		},
		NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		PASSWORD: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ROLE: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_ADMIN_ROLE',
				key: 'ID'
			}
		},
		STATUS: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
	}, {
		tableName: 'TBL_ADMIN',
		timestamps: true,
		underscored: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		deletedAt: false
	});
};
