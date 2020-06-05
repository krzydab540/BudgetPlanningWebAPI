
import ReactDOM from "react-dom";
import Form from "./Form";
import "./styles.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import React, { Component } from "react";
import './App.css';
import './Input.js';
//import axios from 'axios';

let products = [ {"productID": 1,"productName": "Pięty Mojżesza", "productPrice": 234 },
 {"productID": 2,"productName": "Mokasyny Zagłady", "productPrice": 63 },
 {"productID": 3,"productName": "Sandały Asteriksa", "productPrice": 512 },
 {"productID": 4,"productName": "Croksy Dudy", "productPrice": 3 },
 {"productID": 5,"productName": "Buty Kota w Butach", "productPrice": 100 },];



//const columns = [{
//  dataField: 'productID',
 // text: 'Product ID'
//}, {
//  dataField: 'productName',
//  text: 'Product Name'
//}, {
//  dataField: 'productPrice',
//  text: 'Product Price'
//}];






class Table2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };

    this.addPerson = this.addPerson.bind(this);
    //this.deletePerson = this.deletePerson.bind(this);
  }

  addPerson(productID, productName,productPrice) {
    this.setState(prevState => ({
      people: [...prevState.people, { productID, productName,productPrice}]
    }));
  }

  



  componentDidMount() {
    //this.getPeople();
    this.addPeople(5);
  }

  getPeople() {
    fetch("http://localhost:44351/api/getProducts")
      .then(response => response.json())
      .then(response => this.setState({ people: response }))
      .catch(error => console.log(error));
  }


  addPeople(quantity) {
  const startId = products.length;
   for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      productID: id,
      productName: 'Item name ' + id,
     productPrice: 2100 + i
     });
   }
 }

  //deletePerson(email) {
  //  return () => {
  //    this.setState(prevState => ({
  //      people: prevState.people.filter(person => person.email !== email)
  //    }));
  //  };
 // }

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <Form addPerson={this.addPerson} />
        <table>
          <thead>
            <tr>
              <th>LP</th>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.people.map((person, index) => {
              return (
                <tr >
                  <th>{index + 1}</th>
                  <td>{person.productID}</td>
                  <td>{person.productName}</td>
                  <td>{person.productPrice}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Table2 />, rootElement);
export default Table2