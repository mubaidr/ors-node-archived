/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblFcTest', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		fcId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TBL_FINAL_CANDIDATE',
				key: 'ID'
			},
			field: 'FC_ID'
		},
		marks: {
			type: DataTypes.FLOAT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MARKS'
		},
		testLocationTime: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_TEST_LOCATION_TIME',
				key: 'ID'
			},
			field: 'TEST_LOCATION_TIME'
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
		tableName: 'TBL_FC_TEST',
		timestamps: true,
		underscored: true,
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
		deletedAt: false
	});
};
