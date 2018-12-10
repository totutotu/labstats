import React from 'react'
import { connect } from 'react-redux'
import EditMeasurementForm from './EditMeasurementForm'
import { editMeasurement } from '../redux/MeasurementReducer'

class EditMeasurement extends React.Component {
  state = {
    _id: this.props.match.params.id,
    name: '',
    unit: '',
    upperBound: 0.0,
    lowerBound: 0.0,
    id: ''
  }

  componentDidMount() {
    const measurement = this.props.measurements.data.find(m => m._id === this.state._id)
    console.log(measurement)
    this.setState({
      ...measurement,
      upperBound: measurement.bounds.upper,
      lowerBound: measurement.bounds.lower
    })
  }

  handleChange = ({ target }) => {
    const { id, value } = target
    this.setState({ [id]: value })
  }

  edit = () => {
    const { _id } = this.state
    this.props.editMeasurement({ ...this.state, _id })
  }

  disabled = () => {
    const { name, unit } = this.state
    return name.length === 0 || unit.length === 0
  }

  render() {
    return (
      <EditMeasurementForm
        handleChange={this.handleChange}
        edit={this.edit}
        initialValues={this.state}
        disabled={this.disabled}
      />
    )
  }
}

const mapStateToProps = ({ measurements }) => ({
  measurements
})

const mapDispatchToProps = {
  editMeasurement
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMeasurement)
