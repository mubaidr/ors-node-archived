/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('catTestLocationTime', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		locationId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_TEST_LOCATION',
				key: 'ID'
			},
			field: 'LOCATION_ID'
		},
		testDate: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'TEST_DATE'
		},
		testTime: {
			type: "NCHAR",
			allowNull: false,
			defaultValue: '(Ncast(Test_DATE as time)',
			field: 'TEST_TIME'
		},
		available: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'AVAILABLE'
		},
	}, {
		tableName: 'CAT_TEST_LOCATION_TIME',
		timestamps: true,
		underscored: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		deletedAt: false
	});
};
