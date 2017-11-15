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
		CREATED_AT: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '(getdate())'
		},
		UPDATED_AT: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '(getdate())'
		}
	}, {
		tableName: 'TBL_ADMIN',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};
