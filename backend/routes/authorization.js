const express = require('express')
const router = express.Router()

router.use('/api/:model/:id?', (req, res, next) => {
  let db = req.app.get('db')
  let account = req.account
  let method = req.method
  let id = req.params.id
  let model = req.params.model
  let object = db[model]
  let isCatalog = object.options.tableName.toLowerCase().indexOf('cat') === 0

  if (account.catAccountType.description === 'admin121') {
    next()
    return
  }

  if (id) {
    if (isCatalog) {
      if (method === 'GET') {
        next()
        return
      } else {
        res.sendStatus(403)
        return
      }
    }

    object
      .findById(id)
      .then(obj => {
        switch (method) {
          case 'POST':
            next()
          case 'GET':
          case 'PUT':
          case 'DELETE':
            if (
              (obj.candidateId && obj.candidateId === account.candidateId) ||
              (obj.logId && obj.logId === account.user.id)
            ) {
              next()
            } else {
              res.sendStatus(403)
              return
            }
            break
        }
      })
      .catch(next)
  } else {
    switch (method) {
      case 'GET':
        if (isCatalog) {
          next()
          return
        }
        //TODO: Add 'include' list from model attributes

        console.log(object.attributes)

        object
          .findAll({
            where: {
              candidateId: account.candidateId
            }
          })
          .then(list => {
            res.json(list)
            return
          })
          .catch(next)
        break
      case 'POST':
      case 'PUT':
      case 'DELETE':
        next()
        return
        break
    }
  }
})

module.exports = router
