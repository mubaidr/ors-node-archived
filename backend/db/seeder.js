module.exports = {
  seed (models, callback) {
    // Account types
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
  }
}
