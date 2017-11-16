const Sequelize = require('sequelize')
const config = require('config')
const fs = require('fs')
const path = require('path')

const directory = path.join(__dirname, '/models/')
var models = {}

// Setup sequelize
const sequelize = new Sequelize(
  config.get('options.db.name'),
  config.get('options.db.username'),
  config.get('options.db.password'),
  {
    host: config.get('options.db.host'),
    dialect: 'mssql',
    freezeTableName: true,
    operatorsAliases: false,
    timestamps: true,
    underscored: true,
    define: {
      timestamps: true,
      underscored: true,
      freezeTableName: true
    },
    typeValidation: true,
    benchmark: false,
    logging: false,
    query: { raw: true }
  }
)

// Import models
fs.readdirSync(directory).forEach(file => {
  models[getModelName(file)] = sequelize.import(directory + file)
})

// Test connection
sequelize
  .authenticate()
  .then(() => {
    // Sync DB schema
    sequelize
      .sync({
        logging: false
      })
      .then(() => {
        console.log(
          'Connection to the Database has been established successfully.'.info
        )
      })
      .catch(err => {
        console.log('\n' + err.message.error + '\n' + err.stack.warn + '\n')
      })
  })
  .catch(err => {
    console.log('\n' + err.message.error + '\n' + err.stack.warn + '\n')
  })

module.exports = {
  models: models,
  sequelize: sequelize
}

/**
 * Utilities
 */

function getModelName (name) {
  const words = name
    .toLowerCase()
    .replace(/tbl/, '')
    .replace(/cat/, '')
    .replace(/.js/, '')
    .split(/_/)

  let model = words[0]
  for (let i = 1; i < words.length; i++) {
    model += words[i][0].toUpperCase() + words[i].substring(1)
  }

  return model
}
