/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TBL_COURSES', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		TYPE: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_COURSE_TYPE',
				key: 'ID'
			}
		},
		START_DATE: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		END_DATE: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		DESCRIPTION: {
			type: DataTypes.STRING,
			allowNull: false
		},
		CANDIDATE_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TBL_CANDIDATE',
				key: 'ID'
			}
		},
		INSTITUTE: {
			type: DataTypes.STRING,
			allowNull: true
		},
		MAJOR_ID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'CAT_SPECIALIZATION',
				key: 'ID'
			}
		},
		FIELD_ID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'CAT_SPEC_FIELDS',
				key: 'ID'
			}
		},
		DURATION: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		IS_VALID: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0'
		}
	}, {
		tableName: 'TBL_COURSES',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};
