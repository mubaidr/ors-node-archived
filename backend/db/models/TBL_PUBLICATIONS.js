/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblPublications', {
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
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'Title'
		},
		journal: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'Journal'
		},
		authors: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'Authors'
		},
		volumeNumber: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'VolumeNumber'
		},
		pageNumber: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'PageNumber'
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
		tableName: 'TBL_PUBLICATIONS',
		timestamps: true,
		underscored: true,
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
		deletedAt: false
	});
};
