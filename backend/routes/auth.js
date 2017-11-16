const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

router.post('/auth/register/', (req, res, next) => {
  let user = req.body
  const Login = req.app.get('db').Login
  user.password = bcrypt.hashSync(user.password, 8)

  Login.findOne({
    where: {
      username: user.username
    }
  })
    .then(user => {
      if (user) {
        res.send(409)
        next()
      }

      Login.create(user)
        .then(() => {
          res.send(200)
        })
        .catch(next)
    })
    .catch(next)
})

router.post('/auth/login/', (req, res, next) => {
  let username = req.body.username
  let password = req.body.password
  const Login = req.app.get('db').Login

  Login.findOne({
    where: {
      username: username
    }
  })
    .then(user => {
      if (!user) {
        res.send(403)
        next()
      }

      bcrypt.compare(password, user.password, (err, isMatched) => {
        if (err) next(err)
        if (!isMatched) {
          res.send(403)
          next()
        }

        delete user.password

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
    jwt.verify(token, config.secret, (err, account) => {
      if (err) next(err)

      req.account = account
      next()
    })
  } else {
    res.send(403)
    next()
  }
})

router.use('/api/:model/:id?', (req, res, next) => {
  let account = req.account
  let method = req.method
  let model = req.params.model
  let id = req.params.id

  //TODO validate if user is OWNER or ADMIN of this model else 403
  res.send('DEBUG')
  //TODO uncomment
  //next()
})

module.exports = router
