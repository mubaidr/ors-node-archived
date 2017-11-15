/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CAT_INTERVIEW_LOCATION', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ABBRIV: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ADDRESS: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		CENTRE_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_INTERVIEW_CENTRES',
				key: 'ID'
			}
		},
		CAPACITY: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'CAT_INTERVIEW_LOCATION',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};
