const util = require('./util')

module.exports = {
  associate: models => {
    //getRelations(models)

    // activities -> activitiesLog : activityId
    models.activities.hasMany(models.activitiesLog, {
      foreignKey: 'activityId'
    })
    // login -> activitiesLog : loginId
    models.login.hasMany(models.activitiesLog, {
      foreignKey: 'loginId'
    })
    // activitiesAdmin -> activitiesLogAdmin : activityId
    models.activitiesAdmin.hasMany(models.activitiesLogAdmin, {
      foreignKey: 'activityId'
    })
    // desigGroup -> desig : groupId
    models.desigGroup.hasMany(models.desig, {
      foreignKey: 'groupId'
    })
    // payscale -> desig : scaleId
    models.payscale.hasMany(models.desig, {
      foreignKey: 'scaleId'
    })
    // eduCertGrp -> eduFinDeg : certificateId
    models.eduCertGrp.hasMany(models.eduFinDeg, {
      foreignKey: 'certificateId'
    })
    // eduFinDeg -> eduFinDegSubjects : degreeId
    models.eduFinDeg.hasMany(models.eduFinDegSubjects, {
      foreignKey: 'degreeId'
    })
    // interviewCentres -> interviewLocation : centreId
    models.interviewCentres.hasMany(models.interviewLocation, {
      foreignKey: 'centreId'
    })
    // interviewLocation -> interviewLocationTime : interviewLocationId
    models.interviewLocation.hasMany(models.interviewLocationTime, {
      foreignKey: 'interviewLocationId'
    })
    // specialization -> specFields : spId
    models.specialization.hasMany(models.specFields, {
      foreignKey: 'spId'
    })
    // testCentres -> testLocation : centreId
    models.testCentres.hasMany(models.testLocation, {
      foreignKey: 'centreId'
    })
    // testLocation -> testLocationTime : locationId
    models.testLocation.hasMany(models.testLocationTime, {
      foreignKey: 'locationId'
    })
    // candidate -> academics : candidateId
    models.candidate.hasMany(models.academics, {
      foreignKey: 'candidateId'
    })
    // eduFinDeg -> academics : degreeId
    models.academics.belongsTo(models.eduFinDeg, {
      foreignKey: 'degreeId'
    })
    // criteriaAcademics -> academics : criteriaId
    models.academics.belongsTo(models.criteriaAcademics, {
      foreignKey: 'criteriaId'
    })
    // division -> academics : divisionId
    models.academics.belongsTo(models.division, {
      foreignKey: 'divisionId'
    })
    // eduFinDegSubjects -> academics : degreeSubjectId
    models.academics.belongsTo(models.eduFinDegSubjects, {
      foreignKey: 'degreeSubjectId'
    })
    // adminRole -> admin : role
    models.adminRole.hasMany(models.admin, {
      foreignKey: 'role'
    })
    // vacancies -> applications : vacId
    models.vacancies.hasMany(models.applications, {
      foreignKey: 'vacId'
    })
    // appStatus -> applications : status
    models.applications.belongsTo(models.appStatus, {
      foreignKey: 'status'
    })
    // vacancyTestCentre -> applications : testCentre
    models.applications.belongsTo(models.vacancyTestCentre, {
      foreignKey: 'testCentre'
    })
    // candidate -> applications : candidateId
    models.candidate.hasMany(models.applications, {
      foreignKey: 'candidateId'
    })
    // candidate -> books : candidateId
    models.candidate.hasMany(models.books, {
      foreignKey: 'candidateId'
    })
    // maritalStatus -> candidate : maritalStatus
    models.candidate.belongsTo(models.maritalStatus, {
      foreignKey: 'maritalStatus'
    })
    // religion -> candidate : religion
    models.candidate.belongsTo(models.religion, {
      foreignKey: 'religion'
    })
    // gender -> candidate : genderId
    models.candidate.belongsTo(models.gender, {
      foreignKey: 'genderId'
    })
    // login -> candidate : loginId
    models.login.hasOne(models.candidate, {
      foreignKey: 'loginId'
    })
    // candidate -> centerChangeRequests : candidateId
    models.candidate.hasMany(models.centerChangeRequests, {
      foreignKey: 'candidateId'
    })
    // courseType -> courses : courseTypeId
    models.courseType.hasMany(models.courses, {
      foreignKey: 'courseTypeId'
    })
    // candidate -> courses : candidateId
    models.candidate.hasMany(models.courses, {
      foreignKey: 'candidateId'
    })
    // specFields -> courses : fieldId
    models.specFields.hasMany(models.courses, {
      foreignKey: 'fieldId'
    })
    // candidate -> experience : candidateId
    models.candidate.hasMany(models.experience, {
      foreignKey: 'candidateId'
    })
    // specFields -> experience : fieldId
    models.specFields.hasMany(models.experience, {
      foreignKey: 'fieldId'
    })
    // finalCandidate -> fcInterview : fcId
    models.finalCandidate.hasOne(models.fcInterview, {
      foreignKey: 'fcId'
    })
    // interviewLocationTime -> fcInterview : interviewLocationTimeId
    models.interviewLocationTime.hasMany(models.fcInterview, {
      foreignKey: 'interviewLocationTimeId'
    })
    // finalCandidate -> fcTest : fcId
    models.finalCandidate.hasOne(models.fcTest, {
      foreignKey: 'fcId'
    })
    // testLocationTime -> fcTest : testLocationTimeId
    models.testLocationTime.hasMany(models.fcTest, {
      foreignKey: 'testLocationTimeId'
    })
    // feedbackTypes -> feedback : fbTypeId
    models.feedbackTypes.hasMany(models.feedback, {
      foreignKey: 'fbTypeId'
    })
    // feedbackNotification -> feedback : notificationId
    models.feedbackNotification.hasMany(models.feedback, {
      foreignKey: 'notificationId'
    })
    // feedback -> feedbackThreads : feedbackId
    models.feedback.hasMany(models.feedbackThreads, {
      foreignKey: 'feedbackId'
    })
    // applications -> finalCandidate : appId
    models.applications.hasOne(models.finalCandidate, {
      foreignKey: 'appId'
    })
    // questions -> login : questionId
    models.questions.hasMany(models.login, {
      foreignKey: 'questionId'
    })
    // accountType -> login : accountTypeId
    models.accountType.hasMany(models.login, {
      foreignKey: 'accountTypeId'
    })
    // messages -> messagesThreads : messageId
    models.messages.hasMany(models.messagesThreads, {
      foreignKey: 'messageId'
    })
    // login -> messagesThreads : loginId
    models.login.hasMany(models.messagesThreads, {
      foreignKey: 'loginId'
    })
    // feedbackNotification -> messagesThreads : feedbackNotificationId
    models.feedbackNotification.hasMany(models.messagesThreads, {
      foreignKey: 'feedbackNotificationId'
    })
    // candidate -> publications : candidateId
    models.candidate.hasMany(models.publications, {
      foreignKey: 'candidateId'
    })
    // desig -> vacancies : desigId
    models.desig.hasMany(models.vacancies, {
      foreignKey: 'desigId'
    })
    // advertisement -> vacancies : advId
    models.advertisement.hasMany(models.vacancies, {
      foreignKey: 'advId'
    })
    // appStatus -> vacancies : statusId
    models.appStatus.hasMany(models.vacancies, {
      foreignKey: 'statusId'
    })
    // eduCertGrp -> vacancyCertificate : certId
    models.eduCertGrp.hasMany(models.vacancyCertificate, {
      foreignKey: 'certId'
    })
    // vacancies -> vacancyCertificate : vacId
    models.vacancies.hasMany(models.vacancyCertificate, {
      foreignKey: 'vacId'
    })
    // eduFinDegSubjects -> vacancyCertificate : degreeSubjectId
    models.eduFinDegSubjects.hasMany(models.vacancyCertificate, {
      foreignKey: 'degreeSubjectId'
    })
    // vacancies -> vacancyInterviewCentre : vacId
    models.vacancies.hasMany(models.vacancyInterviewCentre, {
      foreignKey: 'vacId'
    })
    // interviewCentres -> vacancyInterviewCentre : interviewId
    models.interviewCentres.hasMany(models.vacancyInterviewCentre, {
      foreignKey: 'interviewId'
    })
    // specialization -> vacancySpecialization : spId
    models.specialization.hasMany(models.vacancySpecialization, {
      foreignKey: 'spId'
    })
    // vacancies -> vacancySpecialization : vacId
    models.vacancies.hasMany(models.vacancySpecialization, {
      foreignKey: 'vacId'
    })
    models.vacancySpecialization.belongsTo(models.vacancies, {
      foreignKey: 'vacId'
    })
    // vacancies -> vacancyTestCentre : vacId
    models.vacancies.hasMany(models.vacancyTestCentre, {
      foreignKey: 'vacId'
    })
    // testCentres -> vacancyTestCentre : testId
    models.testCentres.hasMany(models.vacancyTestCentre, {
      foreignKey: 'testId'
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
