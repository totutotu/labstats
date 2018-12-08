import React from 'react'
import { connect } from 'react-redux'
import MeasurementForm from './MeasurementForm'
import { createMeasurement } from '../redux/MeasurementReducer'

class CreateMeasurement extends React.Component {
  state = {
    name: '',
    unit: '',
    upperBound: 0.0,
    lowerBound: 0.0,
    id: ''
  }

  handleChange = ({ target }) => {
    const { id, value } = target
    this.setState({ [id]: value })
    console.log(this.state)
  }

  create = () => {
    this.props.createMeasurement(this.state)
  }

  render() {
    return (
      <MeasurementForm
        handleChange={this.handleChange}
        create={this.create}
      />
    )
  }
}

const mapDispatchToProps = {
  createMeasurement
}

export default connect(null, mapDispatchToProps)(CreateMeasurement)
