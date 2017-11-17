/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblBooks', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		candidateId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TBL_CANDIDATE',
				key: 'ID'
			},
			field: 'CANDIDATE_ID'
		},
		title1: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TITLE_1'
		},
		title2: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TITLE_2'
		},
		title3: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TITLE_3'
		},
		titleP1: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: 'N',
			field: 'TITLE_P_1'
		},
		titleP2: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TITLE_P_2'
		},
		titleP3: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TITLE_P_3'
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
		},
	}, {
		tableName: 'TBL_BOOKS',
		timestamps: true,
		underscored: true,
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
		deletedAt: false
	});
};
