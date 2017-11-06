import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Page from './Page';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

ReactDOM.render(
  <Router>
    <div className="container">
     <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
       <NavLink to='/' className="navbar-brand">ReactRouter</NavLink>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>

       <div className="collapse navbar-collapse" id="navbarsExample09">
         <ul className="nav navbar-nav">
           <li><NavLink exact activeClassName='activeNow' to='/'>Home</NavLink></li>
           <li><NavLink activeClassName='activeNow' to='/page' >A route</NavLink></li>
         </ul>
       </div>
     </nav>

      <Route exact path='/' component={Home}/>
      <Route path='/page' component={Page} history={history}/>
    </div>
  </Router>
  , document.getElementById('root'));
