require('dotenv').config()
require('./connection.js')
const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 3000
const routes = require('./routes')

if (process.env.NODE_ENV !== 'development' || process.env.NODE_ENV !== 'test') {
  app.use(express.static(path.join(__dirname, 'dist')))
  app.use((request, response) => {
    if (!request.secure) {
      response.redirect('https://' + request.headers.host + request.url)
    }
  })
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'))
  })
}

app.use('/api', routes)

if (process.env.NODE_ENV !== 'test') app.listen(port, () => console.log('App listening on port ' + port))

module.exports = app
