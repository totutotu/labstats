import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import App from './Components/App'
import combinedReducers from './redux/index'
import history from './history'

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(combinedReducers, composeEnhancers(applyMiddleware(thunk)))

const refresh = () => render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('index')
)

refresh()

if (module.hot) {
  console.log('its hot')
  module.hot.accept()
}
