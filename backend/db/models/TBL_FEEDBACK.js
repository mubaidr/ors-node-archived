/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblFeedback', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		fbTypeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_FEEDBACK_TYPES',
				key: 'ID'
			},
			field: 'FB_TYPE_ID'
		},
		candidateId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'CANDIDATE_ID'
		},
		notificationId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_FEEDBACK_NOTIFICATION',
				key: 'ID'
			},
			field: 'NOTIFICATION_ID'
		},
		subject: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'SUBJECT'
		},
		feedbackName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'FEEDBACK_NAME'
		},
	}, {
		tableName: 'TBL_FEEDBACK',
		timestamps: true,
		underscored: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		deletedAt: false
	});
};
