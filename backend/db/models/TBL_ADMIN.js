/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblAdmin', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		cnic: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'CNIC'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'NAME'
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'PASSWORD'
		},
		role: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_ADMIN_ROLE',
				key: 'ID'
			},
			field: 'ROLE'
		},
		status: {
			type: DataTypes.INTEGER,
			allowNull: false,
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
		},
	}, {
		tableName: 'TBL_ADMIN',
		timestamps: true,
		underscored: true,
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
		deletedAt: false
	});
};
