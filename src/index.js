import React from 'react'
import { render } from 'react-dom'
// redux
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
// import logger from 'redux-logger'
// connected-react-router
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
// redux Component
import rootSaga from './store/saga'
import rootReducer from './store/reducers'
// App
import App from './components/App/App'


const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer(history),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
    ),
  ),
)

sagaMiddleware.run(rootSaga)
window.store = store

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementsByClassName('root')[0],
)
