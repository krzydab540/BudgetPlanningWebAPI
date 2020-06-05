import React from 'react';
import './App.css';
import './Input.js';
import {Container, Row, Col} from 'react-bootstrap'
import image1 from './graphic/image_home.jpg'




//<Table13/> to działa <TableForm2/>
//<Table2/> <Table3/> <Table11/><Table12/> <Table1/> <TableForm/> <Table2/>
export default () =>
<div className="Home"> 
<h1>HOME</h1>
<Container >
  <Row className="Row">
    <Col className="Col_text"><h5>Witaj, Budżet studenta to jedyna w swoim rodzaju skarbonka Internetowa, która sprawi że Twój płynny budżet będzie mniej płynny. Zacznij już dzisiaj korzystać z naszych usług, pierwszy semestr gratis!</h5></Col>
    <Col><img className="img" src={image1} alt="Pesos" />;</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
<div className="Home">Tututu</div>

</div>
  
  