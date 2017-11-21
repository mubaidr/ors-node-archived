const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

router.post('/auth/register/', (req, res, next) => {
  const db = req.app.get('db')
  let newUser = new db.login({ ...req.body })
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

router.post('/auth/login/', (req, res, next) => {
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
      include: [db.accountType, db.questions]
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

        // confidential data should not be sent to client
        user = user.get({ plain: true })
        delete user.password
        delete user.answer

        // Append candidateId to user for model checking
        db.candidate
          .findOne({
            where: {
              loginId: user.id
            }
          })
          .then(candidate => {
            if (!candidate) {
              res.sendStatus(400)
              return
            }

            //apend Candiature info
            user.candidateId = candidate.id

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
                  user
                })
              }
            )
          })
          .catch(next)
      })
    })
    .catch(next)
})

router.use('/api/*', (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers['x-access-token']

  if (token) {
    jwt.verify(token, config.get('options.secret'), (err, account) => {
      if (err) next(err)

      req.account = account.data
      next()
    })
  } else {
    res.sendStatus(403)
  }
})

module.exports = router
