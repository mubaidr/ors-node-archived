/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblCandidate', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		fatherName: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'FATHER_NAME'
		},
		dob: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'DOB'
		},
		maritalStatus: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_MARITAL_STATUS',
				key: 'ID'
			},
			field: 'MARITAL_STATUS'
		},
		religion: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_RELIGION',
				key: 'ID'
			},
			field: 'RELIGION'
		},
		birthPlace: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'BIRTH_PLACE'
		},
		postalCity: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'POSTAL_CITY'
		},
		postalTehsil: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'POSTAL_TEHSIL'
		},
		postalDistrict: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'POSTAL_DISTRICT'
		},
		postalAddress: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'POSTAL_ADDRESS'
		},
		mobileNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'MOBILE_NO'
		},
		phoneNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PHONE_NO'
		},
		highestQualification: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'CAT_EDU_FIN_DEG',
				key: 'ID'
			},
			field: 'HIGHEST_QUALIFICATION'
		},
		subject: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'SUBJECT'
		},
		achievements: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ACHIEVEMENTS'
		},
		primeInterestField: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PRIME_INTEREST_FIELD'
		},
		nationality: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'NATIONALITY'
		},
		gender: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'CAT_GENDER',
				key: 'ID'
			},
			field: 'GENDER'
		},
		domicileDistrict: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'DOMICILE_DISTRICT'
		},
		undertaking: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'UNDERTAKING'
		},
		undertakingDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'UNDERTAKING_DATE'
		},
		loginId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TBL_LOGIN',
				key: 'ID'
			},
			field: 'LOGIN_ID'
		},
		fax: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'FAX'
		},
		cnic: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CNIC'
		},
		drivingLicenseId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((1))',
			field: 'DRIVING_LICENSE_ID'
		},
		licenseIssueDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'LICENSE_ISSUE_DATE'
		},
		licenseExpiryDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'LICENSE_EXPIRY_DATE'
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
		}
	}, {
		tableName: 'TBL_CANDIDATE',
		timestamps: true,
		underscored: true,
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
		deletedAt: false
	});
};
