/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TBL_FEEDBACK_THREADS', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		FEEDBACK_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TBL_FEEDBACK',
				key: 'ID'
			}
		},
		ADMIN_ID: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		FB_MESSAGE: {
			type: DataTypes.STRING,
			allowNull: false
		},
		SUBMIT_DATE: {
			type: "SMALLDATETIME",
			allowNull: false
		},
	}, {
		tableName: 'TBL_FEEDBACK_THREADS',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};