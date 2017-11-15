/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TBL_VACANCIES', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		DESIG_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_DESIG',
				key: 'ID'
			}
		},
		ADV_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TBL_ADVERTISEMENT',
				key: 'ID'
			}
		},
		DESCRIPTION: {
			type: DataTypes.STRING,
			allowNull: true
		},
		QUESTION: {
			type: DataTypes.STRING,
			allowNull: false
		},
		CHECK_ACADEMIC_DETAILS: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0'
		},
		STATUS_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((2))',
			references: {
				model: 'CAT_APP_STATUS',
				key: 'ID'
			}
		}
	}, {
		tableName: 'TBL_VACANCIES',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};
