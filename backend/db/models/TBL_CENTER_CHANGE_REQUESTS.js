/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TBL_CENTER_CHANGE_REQUESTS', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		CANDIDATE_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TBL_CANDIDATE',
				key: 'ID'
			}
		},
		DATETIME: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '(getdate())'
		},
		CURRENT_CENTER: {
			type: DataTypes.STRING,
			allowNull: false
		},
		REQUESTED_CENTER: {
			type: DataTypes.STRING,
			allowNull: false
		},
		APPLICATION_NO: {
			type: DataTypes.STRING,
			allowNull: true
		},
		ENTERTAINED: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'TBL_CENTER_CHANGE_REQUESTS',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};
