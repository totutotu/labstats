const mongoose = require('mongoose')
const { Schema }= mongoose

const MeasurementSchema = new Schema({
  id: {
    type: String
  },
  unit: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  bounds: {
    upper: {
      type: Number,
      required: true
    },
    lower: {
      type: Number,
      required: true
    }
  }
})

module.exports = mongoose.model('Measurement', MeasurementSchema)