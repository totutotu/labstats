import React from 'react'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import { getMeasurements, deleteMeasurement, editMeasurement } from '../redux/MeasurementReducer'
import MeasurementTable from './MeasurementTable'

import history from '../history'

class Measurements extends React.Component {
  componentWillMount() {
    this.props.getMeasurements()
  }

  deleteMeasurement = id => {
    this.props.deleteMeasurement(id)
  }

  handleClick = id => {
    console.log(id)
    history.push(`/edit/${id}`)
    this.forceUpdate()
  }

  render() {
    const { measurements } = this.props
    if (measurements.data.length > 0) {
      return (
        <div>
          <MeasurementTable
            data={measurements.data}
            deleteMeasurement={this.deleteMeasurement}
            handleClick={this.handleClick}
          />
        </div>)
    } if (measurements.pending) {
      return <CircularProgress color="secondary" />
    }
    return (
      <Typography align="center" style={{ marginTop: '30px' }} variant="h3">No measurements in DB</Typography>
    )
  }
}

const mapStateToProps = ({ measurements }) => ({
  measurements
})

const mapDispatchToProps = {
  getMeasurements,
  deleteMeasurement,
  editMeasurement
}

export default connect(mapStateToProps, mapDispatchToProps)(Measurements)
