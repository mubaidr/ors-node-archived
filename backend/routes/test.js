const express = require('express')

const router = express.Router({ caseSensitive: true })

router.get('/routes', (req, res) => {
  const table = []
  // eslint-disable-next-line
  const routes = req.app._router.stack

  Object.keys(routes).forEach(key => {
    const route = routes[key]
    if (route) {
      table.push(`${route.stack[0].method} : ${route.path}`)
    }
  })

  res.json(table)
})

router.get('/', (req, res) => {
  res.send('test')
})

router.post('/', (req, res) => {
  res.send(`test: ${req.body}`)
})

module.exports = router
