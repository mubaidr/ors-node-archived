const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

router.post('/auth/register/', (req, res, next) => {
  let username = req.body.username.toLowerCase()
  let password = req.body.password
  let passwordHash = bcrypt.hashSync(password, 8)
})

router.post('/auth/login/', (req, res, next) => {
  let username = req.body.username.toLowerCase()
  let password = req.body.password
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
    res.status(403).send('Unauthorized!')
  }
})

router.use('/api/:model', (req, res, next) => {
  let method = req.method
  console.log(req.param)
  //TODO validate if user is OWNER or ADMIN of this model else 403
  next(new Error('DEBUGGING'))
})

module.exports = router
