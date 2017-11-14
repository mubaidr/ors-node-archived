/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CAT_INTERVIEW_LOCATION_TIME', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		INTERVIEW_LOCATION_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_INTERVIEW_LOCATION',
				key: 'ID'
			}
		},
		INTERVIEW_DATE: {
			type: DataTypes.DATE,
			allowNull: false
		},
		INTERVIEW_TIME: {
			type: "NCHAR",
			allowNull: false
		},
		AVAILABLE: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		},
		PANEL: {
			type: DataTypes.STRING,
			allowNull: true
		},
	}, {
		tableName: 'CAT_INTERVIEW_LOCATION_TIME',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};
