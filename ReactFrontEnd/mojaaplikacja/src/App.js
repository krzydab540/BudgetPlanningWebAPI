import React from 'react';
import './App.css';
import './Input.js';
import Header from './Header.js';

import Body from './Body.js';
import Fotter from './Fotter.js';


/*

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from'./Login';
import SignUp from'./Login';
import Fotter2 from './Fotter2.js';

//<Fotter2/>


function App() {
    return (<Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}></Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
            </Switch>
          </div>
        </div>
      </div></Router>
    );
  }
  
  export default App;

*/



export default () =>



<div ><Header /> 
<Body className="Body"/>
<div className="box_fotter2"></div><Fotter/></div>


 
  