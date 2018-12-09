import axios from 'axios'

const ROOT_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api' : 'http://labstats.herokuapp.com/api'

const getMeasurementsAttempt = () => ({
  type: 'GET_MEASUREMENTS_ATTEMPT'
})

const createMeasurementAttempt = measurement => ({
  type: 'GET_MEASUREMENTS_ATTEMPT',
  payload: {
    ...measurement
  }
})

export const getMeasurements = () => {
  return dispatch => {
    dispatch(getMeasurementsAttempt())
    axios.get(`${ROOT_URL}`)
      .then(response => dispatch({
        type: 'GET_MEASUREMENTS_SUCCESS',
        data: response.data
      }))
      .catch(e => dispatch({
        type: 'GET_MEASUREMENTS_FAILED',
        message: e
      }))
  }
}

export const createMeasurement = measurement => {
  return dispatch => {
    dispatch(createMeasurementAttempt(measurement))
    axios.post(`${ROOT_URL}`, measurement)
      .then(response => dispatch({
        type: 'CREATE_MEASUREMENTS_SUCCESS',
        data: response.data
      }))
      .catch(e => dispatch({
        type: 'CREATE_MEASUREMENTS_FAILED',
        message: e
      }))
  }
}

export const toggleCourseSelect = code => ({
  type: 'TOGGLE_COURSE_SELECT',
  code
})

export const apiCall = () => ({
  type: 'GET_MEASUREMENTS'
})

const reducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case 'GET_MEASUREMENTS_ATTEMPT':
      return {
        ...state,
        pending: true
      }
    case 'GET_MEASUREMENTS_SUCCESS':
      return {
        data: action.data,
        pending: false
      }
    case 'GET_MEASUREMENTS_FAILED':
      return {
        ...state,
        pending: false,
        error: action.message
      }
    case 'CREATE_MEASUREMENTS_ATTEMPT':
      return {
        ...state,
        pending: true
      }
    case 'CREATE_MEASUREMENTS_SUCCESS':
      return {
        data: [...state.data, action.data],
        pending: false
      }
    case 'CREATE_MEASUREMENTS_FAILED':
      return {
        ...state,
        pending: false,
        error: action.message
      }
    default:
      return state
  }
}

export default reducer
