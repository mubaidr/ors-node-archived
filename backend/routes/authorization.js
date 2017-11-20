const express = require('express')
const router = express.Router()

router.use('/api/:model/:id?', (req, res, next) => {
  let account = req.account
  let method = req.method
  let id = req.params.id
  let model = req.params.model.toLowerCase()
  let object = req.app.get('db')[model]
  let isCatalog = object.options.tableName.toLowerCase().indexOf('cat') === 0

  if (account.accountType.description === 'admin') {
    next()
    return
  }

  if (id) {
    if (isCatalog && method !== 'GET') {
      res.sendStatus(403)
      return
    }

    object
      .findById(id)
      .then(obj => {
        if (obj.candidateId && obj.candidateId === account.candidateId) {
          switch (method) {
            case 'GET':
              res.json(obj)
              return
              break
            case 'POST':
            case 'PUT':
            case 'DELETE':
              next()
              break
          }
        } else {
          res.sendStatus(403)
          return
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
