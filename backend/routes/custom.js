const express = require('express')
const router = express.Router({ caseSensitive: true })
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const validator = require('validator')

//TODO: home for news
//TODO: validate email
//TODO: validate password

// Update email & password
router.post('/api/account', (req, res, next) => {
  const db = req.app.get('db')
  let { email, password } = req.body
  let token = req.body.token || req.query.token || req.headers['x-access-token']

  if (!token) {
    res.sendStatus(401)
    return
  }

  jwt.verify(token, config.get('options.secret'), (err, payload) => {
    if (err) {
      res.sendStatus(401)
      return
    }

    let user = payload.data
    let updateOptions

    if (email) {
      updateOptions = { email, isConfirmed: false }
    } else if (password) {
      password = bcrypt.hashSync(password, 8)
      updateOptions = { password }
    } else {
      res.sendStatus(400)
      return
    }

    db.login
      .update(updateOptions, {
        where: {
          id: user.id
        }
      })
      .then(() => {
        //return updated user details
        user.email = email
        user.isConfirmed = false

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
      .catch(next)
  })
})

module.exports = router
