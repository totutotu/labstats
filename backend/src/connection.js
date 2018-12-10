const mongoose = require('mongoose')
let connection

if (process.env.NODE_ENV === 'development') {
  connection = mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    authSource: 'admin',
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    dbName: 'dev'
  })
} else if (process.env.NODE_ENV === 'test') {
  connection = mongoose.connect(process.env.TEST_DB_URI, {
    useNewUrlParser: true,
    authSource: 'admin',
    user: process.env.TEST_DB_USER,
    pass: process.env.TEST_DB_PASSWORD,
    dbName: 'test'
  })
} else {
  connection = mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true
  })
}

module.exports = connection
