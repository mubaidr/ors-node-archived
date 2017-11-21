const util = require('./util')

module.exports = {
  associate: models => {
    //getRelations(models)

    // activities -> activitiesLog : activityId
    models.activities.hasMany(models.activitiesLog, {
      foreignKey: 'activityId'
    })
    models.activitiesLog.belongsTo(models.activities, {
      foreignKey: 'activityId'
    })
    // login -> activitiesLog : loginId
    models.login.hasMany(models.activitiesLog, {
      foreignKey: 'loginId'
    })
    models.activitiesLog.belongsTo(models.login, {
      foreignKey: 'loginId'
    })
    // activitiesAdmin -> activitiesLogAdmin : activityId
    models.activitiesAdmin.hasMany(models.activitiesLogAdmin, {
      foreignKey: 'activityId'
    })
    models.activitiesLogAdmin.belongsTo(models.activitiesAdmin, {
      foreignKey: 'activityId'
    })
    // desigGroup -> desig : groupId
    models.desigGroup.hasMany(models.desig, {
      foreignKey: 'groupId'
    })
    models.desig.belongsTo(models.desigGroup, {
      foreignKey: 'groupId'
    })
    // payscale -> desig : scaleId
    models.payscale.hasMany(models.desig, {
      foreignKey: 'scaleId'
    })
    models.desig.belongsTo(models.payscale, {
      foreignKey: 'scaleId'
    })
    // eduCertGrp -> eduFinDeg : certificateId
    models.eduCertGrp.hasMany(models.eduFinDeg, {
      foreignKey: 'certificateId'
    })
    models.eduFinDeg.belongsTo(models.eduCertGrp, {
      foreignKey: 'certificateId'
    })
    // eduFinDeg -> eduFinDegSubjects : degreeId
    models.eduFinDeg.hasMany(models.eduFinDegSubjects, {
      foreignKey: 'degreeId'
    })
    models.eduFinDegSubjects.belongsTo(models.eduFinDeg, {
      foreignKey: 'degreeId'
    })
    // interviewCentres -> interviewLocation : centreId
    models.interviewCentres.hasMany(models.interviewLocation, {
      foreignKey: 'centreId'
    })
    models.interviewLocation.belongsTo(models.interviewCentres, {
      foreignKey: 'centreId'
    })
    // interviewLocation -> interviewLocationTime : interviewLocationId
    models.interviewLocation.hasMany(models.interviewLocationTime, {
      foreignKey: 'interviewLocationId'
    })
    models.interviewLocationTime.belongsTo(models.interviewLocation, {
      foreignKey: 'interviewLocationId'
    })
    // specialization -> specFields : spId
    models.specialization.hasMany(models.specFields, {
      foreignKey: 'spId'
    })
    models.specFields.belongsTo(models.specialization, {
      foreignKey: 'spId'
    })
    // testCentres -> testLocation : centreId
    models.testCentres.hasMany(models.testLocation, {
      foreignKey: 'centreId'
    })
    models.testLocation.belongsTo(models.testCentres, {
      foreignKey: 'centreId'
    })
    // testLocation -> testLocationTime : locationId
    models.testLocation.hasMany(models.testLocationTime, {
      foreignKey: 'locationId'
    })
    models.testLocationTime.belongsTo(models.testLocation, {
      foreignKey: 'locationId'
    })
    // candidate -> academics : candidateId
    models.candidate.hasMany(models.academics, {
      foreignKey: 'candidateId'
    })
    models.academics.belongsTo(models.candidate, {
      foreignKey: 'candidateId'
    })
    // eduFinDeg -> academics : degreeId
    models.eduFinDeg.hasMany(models.academics, {
      foreignKey: 'degreeId'
    })
    models.academics.belongsTo(models.eduFinDeg, {
      foreignKey: 'degreeId'
    })
    // criteriaAcademics -> academics : criteriaId
    models.criteriaAcademics.hasMany(models.academics, {
      foreignKey: 'criteriaId'
    })
    models.academics.belongsTo(models.criteriaAcademics, {
      foreignKey: 'criteriaId'
    })
    // division -> academics : divisionId
    models.division.hasMany(models.academics, {
      foreignKey: 'divisionId'
    })
    models.academics.belongsTo(models.division, {
      foreignKey: 'divisionId'
    })
    // eduFinDegSubjects -> academics : degreeSubjectId
    models.eduFinDegSubjects.hasMany(models.academics, {
      foreignKey: 'degreeSubjectId'
    })
    models.academics.belongsTo(models.eduFinDegSubjects, {
      foreignKey: 'degreeSubjectId'
    })
    // adminRole -> admin : role
    models.adminRole.hasMany(models.admin, {
      foreignKey: 'role'
    })
    models.admin.belongsTo(models.adminRole, {
      foreignKey: 'role'
    })
    // vacancies -> applications : vacId
    models.vacancies.hasMany(models.applications, {
      foreignKey: 'vacId'
    })
    models.applications.belongsTo(models.vacancies, {
      foreignKey: 'vacId'
    })
    // appStatus -> applications : status
    models.appStatus.hasMany(models.applications, {
      foreignKey: 'status'
    })
    models.applications.belongsTo(models.appStatus, {
      foreignKey: 'status'
    })
    // vacancyTestCentre -> applications : testCentre
    models.vacancyTestCentre.hasMany(models.applications, {
      foreignKey: 'testCentre'
    })
    models.applications.belongsTo(models.vacancyTestCentre, {
      foreignKey: 'testCentre'
    })
    // candidate -> applications : candidateId
    models.candidate.hasMany(models.applications, {
      foreignKey: 'candidateId'
    })
    models.applications.belongsTo(models.candidate, {
      foreignKey: 'candidateId'
    })
    // candidate -> books : candidateId
    models.candidate.hasMany(models.books, {
      foreignKey: 'candidateId'
    })
    models.books.belongsTo(models.candidate, {
      foreignKey: 'candidateId'
    })
    // maritalStatus -> candidate : maritalStatus
    models.maritalStatus.hasMany(models.candidate, {
      foreignKey: 'maritalStatus'
    })
    models.candidate.belongsTo(models.maritalStatus, {
      foreignKey: 'maritalStatus'
    })
    // religion -> candidate : religion
    models.religion.hasMany(models.candidate, {
      foreignKey: 'religion'
    })
    models.candidate.belongsTo(models.religion, {
      foreignKey: 'religion'
    })
    // gender -> candidate : genderId
    models.gender.hasMany(models.candidate, {
      foreignKey: 'genderId'
    })
    models.candidate.belongsTo(models.gender, {
      foreignKey: 'genderId'
    })
    // login -> candidate : loginId
    models.login.hasMany(models.candidate, {
      foreignKey: 'loginId'
    })
    models.candidate.belongsTo(models.login, {
      foreignKey: 'loginId'
    })
    // candidate -> centerChangeRequests : candidateId
    models.candidate.hasMany(models.centerChangeRequests, {
      foreignKey: 'candidateId'
    })
    models.centerChangeRequests.belongsTo(models.candidate, {
      foreignKey: 'candidateId'
    })
    // courseType -> courses : courseTypeId
    models.courseType.hasMany(models.courses, {
      foreignKey: 'courseTypeId'
    })
    models.courses.belongsTo(models.courseType, {
      foreignKey: 'courseTypeId'
    })
    // candidate -> courses : candidateId
    models.candidate.hasMany(models.courses, {
      foreignKey: 'candidateId'
    })
    models.courses.belongsTo(models.candidate, {
      foreignKey: 'candidateId'
    })
    // specialization -> courses : majorId
    models.specialization.hasMany(models.courses, {
      foreignKey: 'majorId'
    })
    models.courses.belongsTo(models.specialization, {
      foreignKey: 'majorId'
    })
    // specFields -> courses : fieldId
    models.specFields.hasMany(models.courses, {
      foreignKey: 'fieldId'
    })
    models.courses.belongsTo(models.specFields, {
      foreignKey: 'fieldId'
    })
    // candidate -> experience : candidateId
    models.candidate.hasMany(models.experience, {
      foreignKey: 'candidateId'
    })
    models.experience.belongsTo(models.candidate, {
      foreignKey: 'candidateId'
    })
    // specialization -> experience : majorId
    models.specialization.hasMany(models.experience, {
      foreignKey: 'majorId'
    })
    models.experience.belongsTo(models.specialization, {
      foreignKey: 'majorId'
    })
    // specFields -> experience : fieldId
    models.specFields.hasMany(models.experience, {
      foreignKey: 'fieldId'
    })
    models.experience.belongsTo(models.specFields, {
      foreignKey: 'fieldId'
    })
    // finalCandidate -> fcInterview : fcId
    models.finalCandidate.hasMany(models.fcInterview, {
      foreignKey: 'fcId'
    })
    models.fcInterview.belongsTo(models.finalCandidate, {
      foreignKey: 'fcId'
    })
    // interviewLocationTime -> fcInterview : interviewLocationTimeId
    models.interviewLocationTime.hasMany(models.fcInterview, {
      foreignKey: 'interviewLocationTimeId'
    })
    models.fcInterview.belongsTo(models.interviewLocationTime, {
      foreignKey: 'interviewLocationTimeId'
    })
    // finalCandidate -> fcTest : fcId
    models.finalCandidate.hasMany(models.fcTest, {
      foreignKey: 'fcId'
    })
    models.fcTest.belongsTo(models.finalCandidate, {
      foreignKey: 'fcId'
    })
    // testLocationTime -> fcTest : testLocationTimeId
    models.testLocationTime.hasMany(models.fcTest, {
      foreignKey: 'testLocationTimeId'
    })
    models.fcTest.belongsTo(models.testLocationTime, {
      foreignKey: 'testLocationTimeId'
    })
    // feedbackTypes -> feedback : fbTypeId
    models.feedbackTypes.hasMany(models.feedback, {
      foreignKey: 'fbTypeId'
    })
    models.feedback.belongsTo(models.feedbackTypes, {
      foreignKey: 'fbTypeId'
    })
    // feedbackNotification -> feedback : notificationId
    models.feedbackNotification.hasMany(models.feedback, {
      foreignKey: 'notificationId'
    })
    models.feedback.belongsTo(models.feedbackNotification, {
      foreignKey: 'notificationId'
    })
    // feedback -> feedbackThreads : feedbackId
    models.feedback.hasMany(models.feedbackThreads, {
      foreignKey: 'feedbackId'
    })
    models.feedbackThreads.belongsTo(models.feedback, {
      foreignKey: 'feedbackId'
    })
    // applications -> finalCandidate : appId
    models.applications.hasMany(models.finalCandidate, {
      foreignKey: 'appId'
    })
    models.finalCandidate.belongsTo(models.applications, {
      foreignKey: 'appId'
    })
    // questions -> login : questionId
    models.questions.hasMany(models.login, {
      foreignKey: 'questionId'
    })
    models.login.belongsTo(models.questions, {
      foreignKey: 'questionId'
    })
    // accountType -> login : accountTypeId
    models.accountType.hasMany(models.login, {
      foreignKey: 'accountTypeId'
    })
    models.login.belongsTo(models.accountType, {
      foreignKey: 'accountTypeId'
    })
    // messages -> messagesThreads : messageId
    models.messages.hasMany(models.messagesThreads, {
      foreignKey: 'messageId'
    })
    models.messagesThreads.belongsTo(models.messages, {
      foreignKey: 'messageId'
    })
    // login -> messagesThreads : loginId
    models.login.hasMany(models.messagesThreads, {
      foreignKey: 'loginId'
    })
    models.messagesThreads.belongsTo(models.login, {
      foreignKey: 'loginId'
    })
    // feedbackNotification -> messagesThreads : feedbackNotificationId
    models.feedbackNotification.hasMany(models.messagesThreads, {
      foreignKey: 'feedbackNotificationId'
    })
    models.messagesThreads.belongsTo(models.feedbackNotification, {
      foreignKey: 'feedbackNotificationId'
    })
    // candidate -> publications : candidateId
    models.candidate.hasMany(models.publications, {
      foreignKey: 'candidateId'
    })
    models.publications.belongsTo(models.candidate, {
      foreignKey: 'candidateId'
    })
    // desig -> vacancies : desigId
    models.desig.hasMany(models.vacancies, {
      foreignKey: 'desigId'
    })
    models.vacancies.belongsTo(models.desig, {
      foreignKey: 'desigId'
    })
    // advertisement -> vacancies : advId
    models.advertisement.hasMany(models.vacancies, {
      foreignKey: 'advId'
    })
    models.vacancies.belongsTo(models.advertisement, {
      foreignKey: 'advId'
    })
    // appStatus -> vacancies : statusId
    models.appStatus.hasMany(models.vacancies, {
      foreignKey: 'statusId'
    })
    models.vacancies.belongsTo(models.appStatus, {
      foreignKey: 'statusId'
    })
    // eduCertGrp -> vacancyCertificate : certId
    models.eduCertGrp.hasMany(models.vacancyCertificate, {
      foreignKey: 'certId'
    })
    models.vacancyCertificate.belongsTo(models.eduCertGrp, {
      foreignKey: 'certId'
    })
    // vacancies -> vacancyCertificate : vacId
    models.vacancies.hasMany(models.vacancyCertificate, {
      foreignKey: 'vacId'
    })
    models.vacancyCertificate.belongsTo(models.vacancies, {
      foreignKey: 'vacId'
    })
    // eduFinDegSubjects -> vacancyCertificate : degreeSubjectId
    models.eduFinDegSubjects.hasMany(models.vacancyCertificate, {
      foreignKey: 'degreeSubjectId'
    })
    models.vacancyCertificate.belongsTo(models.eduFinDegSubjects, {
      foreignKey: 'degreeSubjectId'
    })
    // vacancies -> vacancyInterviewCentre : vacId
    models.vacancies.hasMany(models.vacancyInterviewCentre, {
      foreignKey: 'vacId'
    })
    models.vacancyInterviewCentre.belongsTo(models.vacancies, {
      foreignKey: 'vacId'
    })
    // interviewCentres -> vacancyInterviewCentre : interviewId
    models.interviewCentres.hasMany(models.vacancyInterviewCentre, {
      foreignKey: 'interviewId'
    })
    models.vacancyInterviewCentre.belongsTo(models.interviewCentres, {
      foreignKey: 'interviewId'
    })
    // specialization -> vacancySpecialization : spId
    models.specialization.hasMany(models.vacancySpecialization, {
      foreignKey: 'spId'
    })
    models.vacancySpecialization.belongsTo(models.specialization, {
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
    models.vacancyTestCentre.belongsTo(models.vacancies, {
      foreignKey: 'vacId'
    })
    // testCentres -> vacancyTestCentre : testId
    models.testCentres.hasMany(models.vacancyTestCentre, {
      foreignKey: 'testId'
    })
    models.vacancyTestCentre.belongsTo(models.testCentres, {
      foreignKey: 'testId'
    })
  }
}

function getRelations (models) {
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

function toCamelCase (str) {
  str = str
    .toLowerCase()
    .split('_')
    .map(item => {
      return item[0].toUpperCase() + item.substring(1)
    })
    .join('')

  return str[0].toLowerCase() + str.substring(1)
}
