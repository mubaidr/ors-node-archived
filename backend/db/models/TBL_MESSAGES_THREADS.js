/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblMessagesThreads', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		messageId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TBL_MESSAGES',
				key: 'ID'
			},
			field: 'MESSAGE_ID'
		},
		loginId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TBL_LOGIN',
				key: 'ID'
			},
			field: 'LOGIN_ID'
		},
		adminName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ADMIN_NAME'
		},
		feedbackNotificationId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((1))',
			references: {
				model: 'CAT_FEEDBACK_NOTIFICATION',
				key: 'ID'
			},
			field: 'FEEDBACK_NOTIFICATION_ID'
		},
		isRead: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '0',
			field: 'IS_READ'
		},
		isSent: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '0',
			field: 'IS_SENT'
		},
		dateSent: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'DATE_SENT'
		},
		dateRead: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '(getdate())',
			field: 'DATE_READ'
		},
		notify: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '1',
			field: 'NOTIFY'
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
		tableName: 'TBL_MESSAGES_THREADS',
		timestamps: true,
		underscored: true,
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
		deletedAt: false
	});
};
