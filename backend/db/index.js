const Sequelize = require('sequelize')
const SequelizeAuto = require('sequelize-auto')
const config = require('config')
const fs = require('fs')
const path = require('path')
var models = {}

generateModels(() => {
  setupDB()
})

module.exports = models

/**
 * Utilities
 */

function setupDB () {
  // Setup sequelize
  const sequelize = new Sequelize(config.get('db.name'), config.get('db.username'), config.get('db.password'), {
    host: config.get('db.host'),
    dialect: 'mssql',
    freezeTableName: true,
    operatorsAliases: false,
    timestamps: true
  })

  // Import models
  const dir = path.join(__dirname, 'models/')
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    var model = getModelName(file)
    models[model] = sequelize.import(dir + file)
  })

  // Test connection
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.')
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err)
    })

  // Sync DB schema
  // sequelize.sync()
}

function generateModels (callback) {
  var auto = new SequelizeAuto(config.get('db.name'), config.get('db.username'), config.get('db.password'), {
    host: config.get('db.host'),
    dialect: 'mssql',
    additional: {
      timestamps: true
    }
  })

  auto.run(err => {
    if (err) throw err

    if (callback) {
      callback()
    }
  })
}

function getModelName (name) {
  var words = name
    .toLowerCase()
    .replace(/TBL|CAT/, '')
    .replace('.js', '')
    .split('_')

  var model = words[1]
  for (var i = 2; i < words.length; i++) {
    model += words[i][0].toUpperCase() + words[i].substring(1)
  }

  return model
}
