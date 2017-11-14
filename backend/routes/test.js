const express = require('express')
const router = express.Router()
const db = require('./../db/')

router.get('/', (req, res, next) => {
  db.Gender
    .findAll()
    .then(qs => {
      res.send(qs)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  db.Gender.create({

  })
  res.send('Good boy: ' + req.body)
})

module.exports = router
