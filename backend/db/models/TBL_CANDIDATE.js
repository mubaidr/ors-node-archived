/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TBL_CANDIDATE', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		FATHER_NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		DOB: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		MARITAL_STATUS: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_MARITAL_STATUS',
				key: 'ID'
			}
		},
		RELIGION: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_RELIGION',
				key: 'ID'
			}
		},
		BIRTH_PLACE: {
			type: DataTypes.STRING,
			allowNull: false
		},
		POSTAL_CITY: {
			type: DataTypes.STRING,
			allowNull: false
		},
		POSTAL_TEHSIL: {
			type: DataTypes.STRING,
			allowNull: true
		},
		POSTAL_DISTRICT: {
			type: DataTypes.STRING,
			allowNull: true
		},
		POSTAL_ADDRESS: {
			type: DataTypes.STRING,
			allowNull: false
		},
		MOBILE_NO: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PHONE_NO: {
			type: DataTypes.STRING,
			allowNull: true
		},
		HIGHEST_QUALIFICATION: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'CAT_EDU_FIN_DEG',
				key: 'ID'
			}
		},
		SUBJECT: {
			type: DataTypes.STRING,
			allowNull: true
		},
		ACHIEVEMENTS: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PRIME_INTEREST_FIELD: {
			type: DataTypes.STRING,
			allowNull: true
		},
		NATIONALITY: {
			type: DataTypes.STRING,
			allowNull: false
		},
		GENDER: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_GENDER',
				key: 'ID'
			}
		},
		DOMICILE_DISTRICT: {
			type: DataTypes.STRING,
			allowNull: false
		},
		UNDERTAKING: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))'
		},
		UNDERTAKING_DATE: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		LOGIN_ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TBL_LOGIN',
				key: 'ID'
			}
		},
		FAX: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CNIC: {
			type: DataTypes.STRING,
			allowNull: true
		},
		DRIVING_LICENSE_ID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((1))'
		},
		LICENSE_ISSUE_DATE: {
			type: DataTypes.DATE,
			allowNull: true
		},
		LICENSE_EXPIRY_DATE: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'TBL_CANDIDATE',
		timestamps: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false
	});
};
