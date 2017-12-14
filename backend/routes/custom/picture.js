const express = require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router({ caseSensitive: true })

router.get('/', (req, res, next) => {
  const { account } = req
  const fileName = account.picturePath || 'user_default.png'
  const picPath = path.join(global.app_root, 'pics', fileName)
  const extension = fileName.substring(fileName.lastIndexOf('.') + 1)

  fs.readFile(picPath, (err, picture) => {
    if (err) next(err)

    const file = `data:image/${extension};base64,${picture}`
    res.send(file)
  })
})

router.post('/', (req, res, next) => {
  const db = req.app.get('db')
  const { account } = req
  let { picture } = req.body
  const extension = picture.substring(
    'data:image/'.length,
    picture.indexOf(';base64,')
  )
  picture = picture.substring(picture.indexOf(';base64,') + ';base64,'.length)

  const fileName = `${account.id}-${Date.now()}.${extension}`
  const picsPath = path.join(global.app_root, 'pics', fileName)

  fs.writeFile(picsPath, picture, 'base64', err => {
    if (err) next(err)

    db.login
      .update(
        {
          picturePath: fileName
        },
        {
          where: {
            id: account.id
          }
        }
      )
      .then(() => {
        res.sendStatus(200)
      })
      .catch(next)
  })
})

module.exports = router
