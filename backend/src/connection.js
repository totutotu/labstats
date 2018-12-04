const mongoose = require('mongoose')

module.exports = mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  authSource: 'admin',
  user: process.env.DB_USER,
  pass: process.env.DB_PASSWORD,
  dbName : 'dev'
})