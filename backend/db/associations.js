const util = require('./util')

module.exports = {
  associate: models => {
    //getRelations(models)

    // activity -> activityLog : activityId
    models.activity.hasMany(models.activityLog, {
      foreignKey: 'activityId'
    })
    // login -> activityLog : loginId
    models.login.hasMany(models.activityLog, {
      foreignKey: 'loginId'
    })
    // desigGroup -> desig : desigGroupId
    models.desigGroup.hasMany(models.desig, {
      foreignKey: 'desigGroupId'
    })
    // payscale -> desig : payscaleId
    models.payscale.hasMany(models.desig, {
      foreignKey: 'payscaleId'
    })
    // eduCertGrp -> eduFinDeg : certificateId
    models.eduCertGrp.hasMany(models.eduFinDeg, {
      foreignKey: 'eduCertGrpId'
    })
    // eduFinDeg -> eduFinDegSubject : degreeId
    models.eduFinDeg.hasMany(models.eduFinDegSubject, {
      foreignKey: 'eduFinDegId'
    })
    // interviewCentre -> interviewLocation : centreId
    models.interviewCentre.hasMany(models.interviewLocation, {
      foreignKey: 'interviewCentreId'
    })
    // interviewLocation -> interviewLocationTime : interviewLocationId
    models.interviewLocation.hasMany(models.interviewLocationTime, {
      foreignKey: 'interviewLocationId'
    })
    // specialization -> specializationField : spId
    models.specialization.hasMany(models.specializationField, {
      foreignKey: 'specializationFieldId'
    })
    // testCentre -> testLocation : centreId
    models.testCentre.hasMany(models.testLocation, {
      foreignKey: 'testCentreId'
    })
    // testLocation -> testLocationTime : locationId
    models.testLocation.hasMany(models.testLocationTime, {
      foreignKey: 'testLocationId'
    })
    // candidate -> academic : candidateId
    models.candidate.hasMany(models.academic, {
      foreignKey: 'candidateId'
    })
    // eduFinDeg -> academic : degreeId
    models.academic.belongsTo(models.eduFinDeg, {
      foreignKey: 'eduFinDegId'
    })
    // criteriaacademic -> academic : criteriaId
    models.academic.belongsTo(models.criteriaAcademic, {
      foreignKey: 'criteriaAcademicId'
    })
    // division -> academic : divisionId
    models.academic.belongsTo(models.division, {
      foreignKey: 'divisionId'
    })
    // eduFinDegSubject -> academic : degreeSubjectId
    models.academic.belongsTo(models.eduFinDegSubject, {
      foreignKey: 'eduFinDegSubjectId'
    })
    // vacancy -> application : vacId
    models.vacancy.hasMany(models.application, {
      foreignKey: 'vacancyId'
    })
    // appStatus -> application : status
    models.application.belongsTo(models.appStatus, {
      foreignKey: 'appStatusId'
    })
    // vacancyTestCentre -> application : testCentre
    models.application.belongsTo(models.vacancyTestCentre, {
      foreignKey: 'vacancyTestCentreId'
    })
    // candidate -> application : candidateId
    models.candidate.hasMany(models.application, {
      foreignKey: 'candidateId'
    })
    // candidate -> book : candidateId
    models.candidate.hasMany(models.book, {
      foreignKey: 'candidateId'
    })
    // maritalStatus -> candidate : maritalStatus
    models.candidate.belongsTo(models.maritalStatus, {
      foreignKey: 'maritalStatusId'
    })
    // religion -> candidate : religion
    models.candidate.belongsTo(models.religion, {
      foreignKey: 'religionId'
    })
    // gender -> candidate : genderId
    models.candidate.belongsTo(models.gender, {
      foreignKey: 'genderId'
    })
    // login -> candidate : loginId
    models.login.hasOne(models.candidate, {
      foreignKey: 'loginId'
    })
    // candidate -> centerChangeRequest : candidateId
    models.candidate.hasMany(models.centerChangeRequest, {
      foreignKey: 'candidateId'
    })
    // courseType -> course : courseTypeId
    models.courseType.hasMany(models.course, {
      foreignKey: 'courseTypeId'
    })
    // candidate -> course : candidateId
    models.candidate.hasMany(models.course, {
      foreignKey: 'candidateId'
    })
    // specializationField -> course : fieldId
    models.specializationField.hasMany(models.course, {
      foreignKey: 'specializationFieldId'
    })
    // candidate -> experience : candidateId
    models.candidate.hasMany(models.experience, {
      foreignKey: 'candidateId'
    })
    // specializationField -> experience : fieldId
    models.specializationField.hasMany(models.experience, {
      foreignKey: 'specializationFieldId'
    })
    // finalCandidate -> fcInterview : fcId
    models.finalCandidate.hasOne(models.fcInterview, {
      foreignKey: 'finalCandidateId'
    })
    // interviewLocationTime -> fcInterview : interviewLocationTimeId
    models.interviewLocationTime.hasMany(models.fcInterview, {
      foreignKey: 'interviewLocationTimeId'
    })
    // finalCandidate -> fcTest : fcId
    models.finalCandidate.hasOne(models.fcTest, {
      foreignKey: 'finalCandidateId'
    })
    // testLocationTime -> fcTest : testLocationTimeId
    models.testLocationTime.hasMany(models.fcTest, {
      foreignKey: 'testLocationTimeId'
    })
    // application -> finalCandidate : appId
    models.application.hasOne(models.finalCandidate, {
      foreignKey: 'applicationId'
    })
    // question -> login : questionId
    models.question.hasMany(models.login, {
      foreignKey: 'questionId'
    })
    // accountType -> login : accountTypeId
    models.accountType.hasMany(models.login, {
      foreignKey: 'accountTypeId'
    })
    // candidate -> publication : candidateId
    models.candidate.hasMany(models.publication, {
      foreignKey: 'candidateId'
    })
    // desig -> vacancy : desigId
    models.desig.hasMany(models.vacancy, {
      foreignKey: 'desigId'
    })
    // advertisement -> vacancy : advId
    models.advertisement.hasMany(models.vacancy, {
      foreignKey: 'advertisementId'
    })
    // appStatus -> vacancy : statusId
    models.appStatus.hasMany(models.vacancy, {
      foreignKey: 'appStatusId'
    })
    // eduCertGrp -> vacancyCertificate : certId
    models.eduCertGrp.hasMany(models.vacancyCertificate, {
      foreignKey: 'eduCertGrpId'
    })
    // vacancy -> vacancyCertificate : vacId
    models.vacancy.hasMany(models.vacancyCertificate, {
      foreignKey: 'vacancyId'
    })
    // eduFinDegSubject -> vacancyCertificate : degreeSubjectId
    models.eduFinDegSubject.hasMany(models.vacancyCertificate, {
      foreignKey: 'eduFinDegSubjectId'
    })
    // vacancy -> vacancyInterviewCentre : vacId
    models.vacancy.hasMany(models.vacancyInterviewCentre, {
      foreignKey: 'vacancyId'
    })
    // interviewCentre -> vacancyInterviewCentre : interviewId
    models.interviewCentre.hasMany(models.vacancyInterviewCentre, {
      foreignKey: 'interviewCentreId'
    })
    // specialization -> vacancySpecialization : spId
    models.specialization.hasMany(models.vacancySpecialization, {
      foreignKey: 'specializationId'
    })
    // vacancy -> vacancySpecialization : vacId
    models.vacancy.hasMany(models.vacancySpecialization, {
      foreignKey: 'vacancyId'
    })
    models.vacancySpecialization.belongsTo(models.vacancy, {
      foreignKey: 'vacancyId'
    })
    // vacancy -> vacancyTestCentre : vacId
    models.vacancy.hasMany(models.vacancyTestCentre, {
      foreignKey: 'vacancyId'
    })
    // testCentre -> vacancyTestCentre : testId
    models.testCentre.hasMany(models.vacancyTestCentre, {
      foreignKey: 'testCentreId'
    })
  }
}

function getRelations(models) {
  Object.keys(models).forEach(modelName => {
    let model = models[modelName]

    Object.getOwnPropertyNames(model.attributes).forEach(attribute => {
      let references = model.attributes[attribute].references
      if (references) {
        let refModel = models[util.getModelName(references.model)]
        let refName = util.getModelName(refModel.tableName)
        let name = util.getModelName(model.tableName)
        let prop = toCamelCase(model.attributes[attribute].field)
        console.log(`\n// ${refName} -> ${name} : ${prop}`)
      }
    })
  })
}

function toCamelCase(str) {
  str = str
    .toLowerCase()
    .split('_')
    .map(item => {
      return item[0].toUpperCase() + item.substring(1)
    })
    .join('')

  return str[0].toLowerCase() + str.substring(1)
}
