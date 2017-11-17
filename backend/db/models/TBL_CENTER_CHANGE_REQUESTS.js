/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblCenterChangeRequests', {
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
		datetime: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '(getdate())',
			field: 'DATETIME'
		},
		currentCenter: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'CURRENT_CENTER'
		},
		requestedCenter: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'REQUESTED_CENTER'
		},
		applicationNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'APPLICATION_NO'
		},
		entertained: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '0',
			field: 'ENTERTAINED'
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
		tableName: 'TBL_CENTER_CHANGE_REQUESTS',
		timestamps: true,
		underscored: true,
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
		deletedAt: false
	});
};
