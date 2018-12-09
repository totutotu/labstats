import axios from 'axios'

const ROOT_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api' : 'https://labstats.herokuapp.com/api'

const getMeasurementsAttempt = () => ({
  type: 'GET_MEASUREMENTS_ATTEMPT'
})

const editMeasurementAttempt = measurement => ({
  type: 'EDIT_MEASUREMENTS_ATTEMPT',
  payload: {
    ...measurement
  }
})
const createMeasurementAttempt = measurement => ({
  type: 'CREATE_MEASUREMENTS_ATTEMPT',
  payload: {
    ...measurement
  }
})

const deleteMeasurementAttempt = measurementId => ({
  type: 'DELETE_MEASUREMENTS_ATTEMPT',
  payload: {
    measurementId
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

export const editMeasurement = measurement => {
  return dispatch => {
    dispatch(editMeasurementAttempt(measurement))
    axios.put(`${ROOT_URL}/${measurement._id}`, measurement)
      .then(response => dispatch({
        type: 'EDIT_MEASUREMENTS_SUCCESS',
        data: response.data
      }))
      .catch(e => dispatch({
        type: 'EDIT_MEASUREMENTS_FAILED',
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

export const deleteMeasurement = measurementId => {
  return dispatch => {
    dispatch(deleteMeasurementAttempt(measurementId))
    axios.delete(`${ROOT_URL}/${measurementId}`)
      .then(response => dispatch({
        type: 'DELETE_MEASUREMENTS_SUCCESS',
        data: response.data
      }))
      .catch(e => dispatch({
        type: 'DELETE_MEASUREMENTS_FAILED',
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
    case 'DELETE_MEASUREMENTS_ATTEMPT':
      return {
        ...state,
        pending: true
      }
    case 'DELETE_MEASUREMENTS_SUCCESS':
      return {
        data: [...state.data].filter(m => m._id !== action.data),
        pending: false
      }
    case 'DELETE_MEASUREMENTS_FAILED':
      return {
        ...state,
        pending: false,
        error: action.message
      }
    case 'EDIT_MEASUREMENTS_ATTEMPT':
      return {
        ...state,
        pending: true
      }
    case 'EDIT_MEASUREMENTS_SUCCESS':
      return {
        data: [...state.data].filter(m => m._id !== action.data._id).push(action.data),
        pending: false
      }
    case 'EDIT_MEASUREMENTS_FAILED':
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
