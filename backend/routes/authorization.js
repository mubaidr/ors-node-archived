const express = require('express')
const router = express.Router()
const util = require('./../db/util')

router.use('/api/:model/:id?', (req, res, next) => {
  let db = req.app.get('db')
  let account = req.account
  let method = req.method
  let id = req.params.id
  let model = req.params.model
  let object = db[model]
  let isCatalog = object.options.tableName.toLowerCase().indexOf('cat') === 0

  if (account.catAccountType.description === 'admin') {
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
            res.sendStatus(404)
            return
          case 'GET':
          case 'PUT':
          case 'DELETE':
            if (
              (obj.candidateId && obj.candidateId === account.candidateId) ||
              (obj.loginId && obj.loginId === account.id)
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
        // Returned filtered data to user
        let where
        if (!isCatalog) {
          where = prepareWhereObject(object, account)
          if (!where) {
            res.sendStatus(403)
            return
          }
        }

        object
          .findAll({
            where: where,
            include: prepareIncludeObject(object, db)
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
/**
 *
 *
 * @param {SequelizeModel} object
 * @param {login} account
 * @returns Where query if candidateId or logIn id exists otherwise false
 */
function prepareWhereObject (object, account) {
  let where = false
  let attrs = Object.keys(object.attributes)
  if (attrs.indexOf('candidateId') > -1) {
    where = {
      candidateId: account.candidateId
    }
  } else if (attrs.indexOf('loginId') > -1) {
    where = {
      loginId: account.id
    }
  }
  return where
}
/**
 *
 *
 * @param {SequelizeModel} model
 * @param {Sequelize} db
 * @returns Include array for all references in specified model
 */
function prepareIncludeObject (model, db) {
  let include = []
  let attrs = Object.keys(model.attributes)

  attrs.forEach(attr => {
    let ref = model.attributes[attr].references
    if (ref) {
      let model = ref.model
      include.push(db[util.getModelName(model)])
    }
  })

  return include
}

module.exports = router
