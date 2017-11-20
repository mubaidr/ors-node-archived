/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('catEduFinDegSubjects', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'DESCRIPTION'
		},
		degreeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_EDU_FIN_DEG',
				key: 'ID'
			},
			field: 'DEGREE_ID'
		},
	}, {
		tableName: 'CAT_EDU_FIN_DEG_SUBJECTS',
		timestamps: true,
		underscored: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		deletedAt: false
	});
};
