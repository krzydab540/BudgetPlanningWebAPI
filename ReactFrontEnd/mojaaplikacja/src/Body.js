import React from 'react';
import './App.css';
import './Input.js';
//import  Table1 from './Table1.js';
//import Table11 from './Table11';
//import Table12 from './Table12';
import Table13 from './Table13';
import Gradient from './Gradient';
import Gradient1 from './Gradient1';
import Gradient2 from './Gradient12';
///import TableForm2 from './TableForm2';
//import Table2 from './Table2';
//import TableForm from './TableForm';
//import Table3 from './Table3';
import Home from './Home';
import Nav from './Nav';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';




//<Table13/> to działa <TableForm2/>
//<Table2/> <Table3/> <Table11/><Table12/> <Table1/> <TableForm/> <Table2/>

function Body(){
return(
    <Router>

        <div className="Table"> 
        <Gradient/>
        <Nav/>
        <Gradient1/>
        <Gradient2/>
            <div className="Home2">
            <Switch>
                 <Route path="/" exact component={Home}/>
                 <Route path="/tab" component={Table13}/>
                 <Route path="/tab2" component={Table13}/>
            </Switch>
            </div>
         </div>
    </Router>

    )
}




export default Body;

  
  