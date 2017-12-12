const express = require('express')

const router = express.Router({ caseSensitive: true })
const util = require('./../db/util')

/**
 *
 *
 * @param {SequelizeModel} object
 * @param {login} account
 * @returns Where query if candidateId or logIn id exists otherwise false
 */
function prepareWhereObject (object, account) {
  let where = false
  const attrs = Object.keys(object.attributes)
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
  const include = []
  const attrs = Object.keys(model.attributes)

  attrs.forEach(attr => {
    const ref = model.attributes[attr].references
    if (ref) {
      include.push(db[util.getModelName(ref.model)])
    }
  })

  return include
}

router.use('/api/:model/:id?', (req, res, next) => {
  const db = req.app.get('db')
  const { account, method } = req
  const { id, model } = req.params
  const object = db[model]
  let where

  if (!object) {
    next()
    return
  }

  const isCatalog = object.options.tableName.toLowerCase().indexOf('cat') === 0

  if (account.accountTypeId === 2) {
    next()
    return
  }

  if (id) {
    if (isCatalog) {
      if (method === 'GET') {
        next()
        return
      }
      res.sendStatus(403)
      return
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
            if (obj.candidateId && obj.candidateId === account.candidateId) {
              next()
            } else {
              res.sendStatus(403)
            }
            break
          default:
            next()
        }
      })
      .catch(next)
  } else {
    switch (method) {
      case 'GET':
        // Returned filtered data to user
        if (!isCatalog) {
          where = prepareWhereObject(object, account)
          if (!where) {
            res.json([])
            return
          }
        }

        object
          .findAll({
            where,
            include: prepareIncludeObject(object, db)
          })
          .then(list => {
            res.json(list)
          })
          .catch(next)
        break
      case 'POST':
      case 'PUT':
      case 'DELETE':
      default:
        next()
    }
  }
})

module.exports = router
