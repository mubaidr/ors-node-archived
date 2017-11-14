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
  db.Gender
    .create({
      DESCRIPTION: ''
    })
    .then(g => {
      res.send(g)
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

module.exports = router
