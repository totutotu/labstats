import React from 'react'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import NavBar from './NavBar'
import Router from './Router'
import 'react-toastify/dist/ReactToastify.min.css'


const App = ({ measurements }) => (
  <div>
    <NavBar />
    <h1>asdsada</h1>
    <ToastContainer position="top-center" />
    {measurements.error ? toast.error(
      <h4>{measurements.error}</h4>
    )
      : null}
    <Router />
  </div>
)

const mapStateToProps = ({ measurements }) => ({
  measurements
})

export default connect(mapStateToProps, null)(App)
