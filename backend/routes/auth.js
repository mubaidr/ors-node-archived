const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

router.post('/auth/register/', (req, res, next) => {
  const Login = req.app.get('db').Login
  let user = req.body
  user.password = bcrypt.hashSync(user.password, 8)

  if (!user.username) {
    res.sendStatus(400)
    return
  }

  Login.findOne({
    where: {
      username: user.username
    }
  })
    .then(user => {
      if (user) {
        res.sendStatus(409)
        return
      }

      Login.create(user)
        .then(() => {
          res.sendStatus(200)
        })
        .catch(err => {
          res.status(400).send(err)
        })
    })
    .catch(next)
})

router.post('/auth/login/', (req, res, next) => {
  const Login = req.app.get('db').Login
  let username = req.body.username
  let password = req.body.password

  if (!username || !password) {
    res.sendStatus(400)
    return
  }

  Login.findOne({
    where: {
      username: username
    }
  })
    .then(user => {
      if (!user) {
        res.sendStatus(403)
        return
      }

      bcrypt.compare(password, user.password, (err, isMatched) => {
        if (err) next(err)
        if (!isMatched) {
          res.sendStatus(403)
          return
        }

        // Password should be sent to client
        delete user.dataValues.password

        jwt.sign(
          {
            data: user
          },
          config.get('options.secret'),
          {
            expiresIn: 60 * 60 * 24
          },
          function (err, token) {
            if (err) next(err)

            res.json({
              token: token,
              user: user
            })
          }
        )
      })
    })
    .catch(next)
})

router.use('/api/*', (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers['x-access-token']

  if (token) {
    jwt.verify(token, config.get('options.secret'), (err, account) => {
      if (err) next(err)

      req.account = account
      next()
    })
  } else {
    res.sendStatus(403)
  }
})

router.use('/api/:model/:id?', (req, res, next) => {
  let account = req.account
  let method = req.method
  let model = req.params.model
  let id = req.params.id

  //TODO validate if user is OWNER or ADMIN of this model else 403

  //TODO uncomment
  next()
})

module.exports = router
