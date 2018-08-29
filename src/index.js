import React from 'react'
import { render } from 'react-dom'
import 'normalize.css'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import App from './components/App/App'

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// THIS IS FOR PROGRESSIVE WEB APPS
registerServiceWorker()
