import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(
  <App min={-10} max={10} />
  , document.getElementById('root')
)