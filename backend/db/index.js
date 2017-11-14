const Sequelize = require('sequelize')
const config = require('config')
const fs = require('fs')
const path = require('path')

const directory = path.join(__dirname, '/models/')
var models = {}

// Setup sequelize
const sequelize = new Sequelize(config.get('db.name'), config.get('db.username'), config.get('db.password'), {
  host: config.get('db.host'),
  dialect: 'mssql',
  freezeTableName: true,
  operatorsAliases: false,
  timestamps: true,
  underscored: true,
  define: {
    timestamps: true,
    underscored: true,
    freezeTableName: true
  }
})

// Import models
fs.readdirSync(directory).forEach(file => {
  models[getModelName(file)] = sequelize.import(directory + file)
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
sequelize.sync()

module.exports = models

/**
 * Utilities
 */

function getModelName (name) {
  const words = name
    .toLowerCase()
    .replace(/TBL|CAT/, '')
    .replace('.js', '')
    .split('_')

  let model = words[1]
  for (let i = 2; i < words.length; i++) {
    model += words[i][0].toUpperCase() + words[i].substring(1)
  }

  return model
}
