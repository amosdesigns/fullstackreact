import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes'
import './index.css';

const MOUNT = document.getElementById('root') // or document.querySelector('#root')
const renderApp = Comp => ReactDOM.render(Comp, MOUNT)

if (module.hot) {
  module.hot.accept('./routes', () => {
    // accept hot change request
    const NextApp = require('./routes').default
    renderApp(<NextApp />)
  })
}

renderApp(<App />)
