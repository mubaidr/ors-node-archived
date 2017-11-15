/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TBL_EXPERIENCE', {
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
		ORGANIZATION: {
			type: DataTypes.STRING,
			allowNull: false
		},
		DESIGNATION: {
			type: DataTypes.STRING,
			allowNull: false
		},
		SALARY: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		},
		START_DATE: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		END_DATE: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		REASON_OF_LEAVE: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STATUS: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		},
		MAJOR_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_SPECIALIZATION',
				key: 'ID'
			}
		},
		FIELD_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
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
		},
		MAJOR_ASSIGNMENTS: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		CREATED_AT: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '(getdate())'
		},
		UPDATED_AT: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '(getdate())'
		}
	}, {
		tableName: 'TBL_EXPERIENCE',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};
