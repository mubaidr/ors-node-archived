const express = require('express')
const router = express.Router({ caseSensitive: true })
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

router.post('/auth/register', (req, res, next) => {
  const db = req.app.get('db')
  let newUser = db.login.build({ ...req.body })
  newUser.password = bcrypt.hashSync(newUser.password, 8)

  if (!newUser.username) {
    res.sendStatus(400)
    return
  }

  db.login
    .findOne({
      where: {
        username: newUser.username
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

  let username = req.body.username
  let password = req.body.password

  if (!username || !password) {
    res.sendStatus(400)
    return
  }

  db.login
    .findOne({
      where: {
        username: username
      },
      include: [db.accountType]
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
            data: user
          },
          config.get('options.secret'),
          {
            expiresIn: 60 * 60 * 24
          },
          function(err, token) {
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
    jwt.verify(token, config.get('options.secret'), (err, account) => {
      if (err) {
        res.sendStatus(401)
        return
      }

      req.account = account.data
      next()
    })
  } else {
    res.sendStatus(401)
  }
})

module.exports = router
