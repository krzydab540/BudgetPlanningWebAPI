import React from "react";
import "./App.css";

import "./Input.js";
//import  Table1 from './Table1.js';
//import Table11 from './Table11';
//import Table12 from './Table12';

import Gradient from "./Gradient";

import Login3 from "./Login3";
///import TableForm2 from './TableForm2';
//import Table2 from './Table2';
//import TableForm from './TableForm';
//import Table3 from './Table3';



function Body() {
  return (
    /*
<Router>
    <div className="Table">
    <Gradient/>
    <Nav/>
    <Gradient1/>
    <Gradient2/>
        <div className="Home2">
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/tab"  component={Table13}/>
            <Route path="/tab2" component={Table13}/>

        </Switch>
    </div>
</div>


</Router>

*/
    <div className="Table">
      <Gradient />
      <Login3 />
    </div>
  );
}

export default Body;
