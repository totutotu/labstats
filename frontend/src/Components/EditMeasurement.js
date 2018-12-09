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

    this.setState({
      ...measurement,
      upperBound: measurement.bounds.upper,
      lowerBound: measurement.bounds.lower
    })
    console.log(this.state)
  }

  handleChange = ({ target }) => {
    const { id, value } = target
    this.setState({ [id]: value })
  }

  edit = () => {
    const { _id } = this.state
    this.props.editMeasurement({ ...this.state, _id })
  }

  render() {
    return (
      <EditMeasurementForm
        handleChange={this.handleChange}
        edit={this.edit}
        initialValues={this.state}
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
