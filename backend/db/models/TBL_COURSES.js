/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblCourses', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		courseTypeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_COURSE_TYPE',
				key: 'ID'
			},
			field: 'COURSE_TYPE_ID'
		},
		startDate: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'START_DATE'
		},
		endDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'END_DATE'
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'DESCRIPTION'
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
		institute: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'INSTITUTE'
		},
		majorId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'CAT_SPECIALIZATION',
				key: 'ID'
			},
			field: 'MAJOR_ID'
		},
		fieldId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'CAT_SPEC_FIELDS',
				key: 'ID'
			},
			field: 'FIELD_ID'
		},
		duration: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DURATION'
		},
		isValid: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'IS_VALID'
		},
	}, {
		tableName: 'TBL_COURSES',
		timestamps: true,
		underscored: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		deletedAt: false
	});
};
