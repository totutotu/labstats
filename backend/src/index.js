require('dotenv').config()
require('./connection.js')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const port = 3000
const routes = require('./routes')

app.use('/api', routes)

app.listen(port, () => console.log('App listening on port ' + port))
