import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Measurements from './Measurements'
import CreateMeasurement from './CreateMeasurement'
import EditMeasurement from './EditMeasurement'

const Router = () => (
  <div>
    <Switch>
      <Route path="/new" component={CreateMeasurement} />
      <Route path="/edit/:id" component={EditMeasurement} />
      <Route path="/" component={Measurements} />
    </Switch>
  </div>
)

export default Router
