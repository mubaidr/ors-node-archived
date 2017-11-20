const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  const db = req.app.get('db')

  db.desig
    .findOne({
      where: {
        //username: '1111111111111'
      },
      include: [db.desigGroup]
    })
    .then(l => {
      res.json(l)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  res.send('test: ' + req.body)
})

module.exports = router
