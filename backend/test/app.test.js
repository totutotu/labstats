const request = require('supertest')
const app = require('../src/routes')
const mongoose = require('mongoose')

const Measurement = require('../src/models/Measurement')

require('dotenv').config()
require('../src/connection.js')

describe('Test the root path', () => {
  beforeAll(async () => {
    await Measurement.create({ id: 'HG', unit: 'g/l', name: 'Hemoglobiini', bounds: { upper: 167, lower: 134 }})
    await Measurement.create({ id: 'LDL', unit: 'mmol/l', name: 'LDL-kolesteroli', bounds: { upper: 3, lower: 0 }})
  })

  test('It should response the GET method', (done) => {
    request(app).get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200)
        done()
      })
  })

  test('It should return all measurements in GET root', (done) => {
    request(app).get('/')
      .then((response) => {
        expect(response.body.length).toBe(2)
        done()
      })
  })

  test('It should return all measurements in GET root', (done) => {
    request(app).get('/')
      .then((response) => {
        expect(response.body.length).toBe(2)
        done()
      })
  })
  

  afterAll(async (done) => {
    await Measurement.deleteMany()
    await mongoose.connection.close()
    done()
  })
})



// 1; Hemoglobiini; g/l; 134; 167

// 2; LDL-kolesteroli; mmol/l; 0; 3

