const express = require('express')
const router = express.Router({ caseSensitive: true })
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

router.post('/auth/register', (req, res, next) => {
  const db = req.app.get('db')
  let newUser = db.login.build({ ...req.body })
  newUser.password = bcrypt.hashSync(newUser.password, 8)

  if (!newUser.email) {
    res.sendStatus(400)
    return
  }

  db.login
    .findOne({
      where: {
        email: newUser.email
      }
    })
    .then(user => {
      if (user) {
        res.sendStatus(409)
        return
      }

      newUser
        .save()
        .then(() => {
          res.sendStatus(200)
        })
        .catch(next)
    })
})

router.post('/auth/login', (req, res, next) => {
  const db = req.app.get('db')

  let email = req.body.email
  let password = req.body.password

  //TODO: verify using validator
  if (!email || !password) {
    res.sendStatus(400)
    return
  }

  db.login
    .findOne({
      where: {
        email: email
      }
    })
    .then(user => {
      if (!user) {
        res.sendStatus(401)
        return
      }

      bcrypt.compare(password, user.password, (err, isMatched) => {
        if (err) next(err)
        if (!isMatched) {
          res.sendStatus(401)
          return
        }

        // confidential data should not be sent to client
        user = user.get({ plain: true })
        delete user.password

        //signin
        jwt.sign(
          {
            iss: config.get('options.iss') || 'iss-not-specified',
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            data: user
          },
          config.get('options.secret'),
          function (err, token) {
            if (err) next(err)

            res.json({
              token,
              login: user
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
    jwt.verify(token, config.get('options.secret'), (err, payload) => {
      if (err) {
        res.sendStatus(401)
        return
      }

      req.account = payload.data
      next()
    })
  } else {
    res.sendStatus(401)
  }
})

module.exports = router
