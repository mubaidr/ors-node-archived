/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CAT_TEST_LOCATION_TIME', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		LOCATION_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_TEST_LOCATION',
				key: 'ID'
			}
		},
		TEST_DATE: {
			type: DataTypes.DATE,
			allowNull: false
		},
		TEST_TIME: {
			type: "NCHAR",
			allowNull: false,
			defaultValue: '(Ncast(Test_DATE as time)'
		},
		AVAILABLE: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
	}, {
		tableName: 'CAT_TEST_LOCATION_TIME',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};
