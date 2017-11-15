/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TBL_MESSAGES_THREADS', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		MESSAGE_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TBL_MESSAGES',
				key: 'ID'
			}
		},
		LOGIN_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TBL_LOGIN',
				key: 'ID'
			}
		},
		ADMIN_NAME: {
			type: DataTypes.STRING,
			allowNull: true
		},
		FEEDBACK_NOTIFICATION_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((1))',
			references: {
				model: 'CAT_FEEDBACK_NOTIFICATION',
				key: 'ID'
			}
		},
		IS_READ: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '0'
		},
		IS_SENT: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '0'
		},
		DATE_SENT: {
			type: DataTypes.DATE,
			allowNull: false
		},
		DATE_READ: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '(getdate())'
		},
		NOTIFY: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '1'
		},
	}, {
		tableName: 'TBL_MESSAGES_THREADS',
		timestamps: true,
		underscored: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		deletedAt: false
	});
};
