const express = require('express')
const router = express.Router({ caseSensitive: true })
const bcrypt = require('bcryptjs')
const validator = require('validator')

//TODO: validate email
//TODO: validate password

router.post('/', (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers['x-access-token']
  const db = req.app.get('db')
  let { email, password } = req.body
  let user = req.account
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

      // Update client side info
      res.json({
        token,
        login: user
      })
    })
    .catch(next)
})

module.exports = router
