/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TBL_BOOKS', {
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
		TITLE_1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		TITLE_2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		TITLE_3: {
			type: DataTypes.STRING,
			allowNull: true
		},
		TITLE_P_1: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: 'N'
		},
		TITLE_P_2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		TITLE_P_3: {
			type: DataTypes.STRING,
			allowNull: true
		},
	}, {
		tableName: 'TBL_BOOKS',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};
