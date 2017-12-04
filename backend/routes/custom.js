const express = require('express')
const router = express.Router({ caseSensitive: true })
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

//TODO: home for news

router.post('/api/account', (req, res, next) => {
  const db = req.app.get('db')
  let { email, password } = req.body
  let token = req.body.token || req.query.token || req.headers['x-access-token']
  let login = db.login.build(req.account)

  if (token) {
    jwt.verify(token, config.get('options.secret'), (err, account) => {
      if (err) {
        res.sendStatus(401)
        return
      }

      if (email) {
        //TODO: validate email
        login.set('email', email)
        login.set('isConfirmed', false)
        //send confirmation email
      } else if (password) {
        //TODO: validate password
        login.set('password', bcrypt.hashSync(password, 8))
      }

      //TODO: save login
    })
  } else {
    res.sendStatus(401)
  }
})

module.exports = router
