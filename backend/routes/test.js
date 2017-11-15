const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  const db = req.app.get('db')

  db.Gender.findAll()
    .then(g => {
      res.send(g)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  const db = req.app.get('db')

  db.Gender.create({
    DESCRIPTION: ''
  })
    .then(g => {
      res.send(g)
    })
    .catch(next)
})

module.exports = router
