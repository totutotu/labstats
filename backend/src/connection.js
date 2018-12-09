const mongoose = require('mongoose')
let connection

if (process.env.NODE_ENV === 'development') {
  connection = mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    authSource: 'admin',
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    dbName : 'dev'
  })
} else {
  connection = mongoose.connect(process.env.DB_URI)
}

module.exports = connection
