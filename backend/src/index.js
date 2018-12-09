require('dotenv').config()
require('./connection.js')
const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const port = 3000
const routes = require('./routes')

app.use('/api', routes)

app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'))
})

app.listen(port, () => console.log('App listening on port ' + port))
