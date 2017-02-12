import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import axios from 'axios';

import Login from './Login'
import Reports from './Reports'
import App from './App'
import './main.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="reports" component={Reports} />
      <Route path="login" component={Login} />
    </Route>
  </Router>,
  document.getElementById('root')
)
