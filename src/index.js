import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login.js';
import Home from './components/home.js';


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
	  	<Route exact path="/">
		  {undefined==sessionStorage.token?<Login />:<Home />}
		</Route>
	</Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
