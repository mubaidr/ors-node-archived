/**
 * Not so secret options
 */
var options = require('./options')

module.exports = {
  options: {
    ...options,
    iss: 'ors-node'
  }
}
