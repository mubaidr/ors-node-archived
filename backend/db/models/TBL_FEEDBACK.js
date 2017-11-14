/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TBL_FEEDBACK', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		FB_TYPE_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_FEEDBACK_TYPES',
				key: 'ID'
			}
		},
		CANDIDATE_ID: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		NOTIFICATION_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_FEEDBACK_NOTIFICATION',
				key: 'ID'
			}
		},
		SUBJECT: {
			type: DataTypes.STRING,
			allowNull: false
		},
		FEEDBACK_NAME: {
			type: DataTypes.STRING,
			allowNull: true
		},
	}, {
		tableName: 'TBL_FEEDBACK',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};
