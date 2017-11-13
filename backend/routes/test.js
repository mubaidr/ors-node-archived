const express = require('express')
const router = express.Router()
const db = require('./../db/')

router.get('/', (req, res, next) => {
  db.questions
    .findAll()
    .then(qs => {
      res.send(qs)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  res.send('Good boy: ' + req.body)
})

module.exports = router
