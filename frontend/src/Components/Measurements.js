import React from 'react'
import { connect } from 'react-redux'
import { getMeasurements, deleteMeasurement } from '../redux/MeasurementReducer'
import MeasurementTable from './MeasurementTable'


class Measurements extends React.Component {
  componentWillMount() {
    this.props.getMeasurements()
  }

  deleteMeasurement = id => {
    this.props.deleteMeasurement(id)
  }

  render() {
    const { measurements } = this.props
    if (measurements.data.length > 0) {
      return (
        <MeasurementTable
          data={measurements.data}
          deleteMeasurement={this.deleteMeasurement}
        />)
    }
    return (
      <h1>No measurements in DB</h1>
    )
  }
}

const mapStateToProps = ({ measurements }) => ({
  measurements
})

const mapDispatchToProps = {
  getMeasurements,
  deleteMeasurement
}

export default connect(mapStateToProps, mapDispatchToProps)(Measurements)
