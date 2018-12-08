import React from 'react'
import { connect } from 'react-redux'
import { getMeasurements } from '../redux/MeasurementReducer'
import MeasurementTable from './MeasurementTable'


class Measurements extends React.Component {
  componentWillMount() {
    this.props.getMeasurements()
  }

  render() {
    const { measurements } = this.props
    if (measurements.data.length > 0) {
      return <MeasurementTable data={measurements.data} />
    }
    return (
      <h1>asdsad</h1>
    )
  }
}

const mapStateToProps = ({ measurements }) => ({
  measurements
})

const mapDispatchToProps = {
  getMeasurements
}

export default connect(mapStateToProps, mapDispatchToProps)(Measurements)
