import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function Nav(){
return  (
    <nav>
        
        <ul className="buttons2">
        <Link to="/">
            <Button className="buttons_select" variant="primary">Home</Button>{' '}
        </Link>
        <Link to="/tab">
             <Button className="buttons_select" variant="primary">Tabela</Button>{' '}
        </Link>
        <Link to="/tab2">
            <Button className="buttons_select2" variant="primary">Tabela2</Button>{' '}
        </Link>
        
        

            
        </ul>




    </nav>
    )
}

export default Nav;