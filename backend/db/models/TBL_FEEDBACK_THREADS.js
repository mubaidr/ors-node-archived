/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblFeedbackThreads', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		feedbackId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TBL_FEEDBACK',
				key: 'ID'
			},
			field: 'FEEDBACK_ID'
		},
		adminId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ADMIN_ID'
		},
		fbMessage: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'FB_MESSAGE'
		},
		submitDate: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'SUBMIT_DATE'
		},
	}, {
		tableName: 'TBL_FEEDBACK_THREADS',
		timestamps: true,
		underscored: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		deletedAt: false
	});
};
