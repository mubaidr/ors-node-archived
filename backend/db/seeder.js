module.exports = {
  seed (models, callback) {
    // Account Types
    models.accountType
      .findAndCountAll({
        where: {
          id: [1, 2]
        }
      })
      .then(res => {
        if (res.count === 0) {
          models.accountType.bulkCreate([
            {
              id: 1,
              description: 'User'
            },
            {
              id: 2,
              description: 'Admin'
            }
          ])
        }

        callback()
      })

    // Marital Status
    models.maritalStatus
      .findAndCountAll({
        where: {
          id: [1, 2]
        }
      })
      .then(res => {
        if (res.count === 0) {
          models.maritalStatus.bulkCreate([
            {
              id: 1,
              description: 'Single'
            },
            {
              id: 2,
              description: 'Married'
            }
          ])
        }

        callback()
      })
  }
}
