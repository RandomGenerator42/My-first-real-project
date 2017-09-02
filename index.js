import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router>
<div>
	     <Link to="/">Home </Link>
  <Link to="/add"> add </Link>
	<Route exact path="/" component={App} />
	<Route path="/login" />
	</div>
	</Router>
	, document.getElementById('root'));
registerServiceWorker();
