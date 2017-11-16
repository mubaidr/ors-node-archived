/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('catTestLocation', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		abbriv: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'ABBRIV'
		},
		address: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'ADDRESS'
		},
		centreId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_TEST_CENTRES',
				key: 'ID'
			},
			field: 'CENTRE_ID'
		},
		capacity: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'CAPACITY'
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
		tableName: 'CAT_TEST_LOCATION',
		timestamps: true,
		underscored: true,
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
		deletedAt: false
	});
};
