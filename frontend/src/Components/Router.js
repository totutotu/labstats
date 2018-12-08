import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Measurements from './Measurements'
import CreateMeasurement from './CreateMeasurement'

const Router = () => (
  <div>
    <Switch>
      <Route path="/new" component={CreateMeasurement} />
      <Route path="/" component={Measurements} />
    </Switch>
  </div>
)

export default Router
