const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  const Gender = req.app.get('db').Gender

  Gender.findAll()
    .then(g => {
      res.send(g)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  const Gender = req.app.get('db').Gender

  Gender.create({
    DESCRIPTION: ''
  })
    .then(g => {
      res.send(g)
    })
    .catch(next)
})

module.exports = router
