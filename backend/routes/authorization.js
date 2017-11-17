const express = require('express')
const router = express.Router()

router.use('/api/:model/:id?', (req, res, next) => {
  let account = req.account
  let method = req.method
  let model = req.params.model.toLowerCase()
  let id = req.params.id

  let object = req.app.get('db')[model]
  let isCatalog = object.options.tableName.toLowerCase().indexOf('cat') === 0

  console.log('\n----\n'.info, id, method, '\n----\n'.info)

  if (id) {
    switch (method) {
      case 'GET':
        object
          .findById(id)
          .then(obj => {
            if (obj.candidateId && obj.candidateId === account.candidateId) {
              res.send(obj)
              return
            }
            res.sendStatus(403)
            return
          })
          .catch(next)
        break
      case 'POST':
        break
      case 'PUT':
        break
      case 'DELETE':
        break
    }
  } else {
    switch (method) {
      case 'GET':
        if (isCatalog) {
          next()
        }

        object
          .findAll({
            where: {
              candidateId: account.candidateId
            }
          })
          .then(list => {
            res.send(list)
            return
          })
          .catch(next)
        break
      case 'POST':
        break
      case 'PUT':
        break
      case 'DELETE':
        break
    }
  }
})

module.exports = router
