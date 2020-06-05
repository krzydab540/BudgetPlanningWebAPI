
import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './App.css';
import axios from 'axios';
import './Input.js';





//const products = [ {"productID": 1,"productName": "Pięty Mojżesza", "productPrice": 234 },
// {"productID": 2,"productName": "Mokasyny Zagłady", "productPrice": 63 },
// {"productID": 3,"productName": "Sandały Asteriksa", "productPrice": 512 },
// {"productID": 4,"productName": "Croksy Dudy", "productPrice": 3 },
// {"productID": 5,"productName": "Buty Kota w Butach", "productPrice": 100 },];

let products = [];



 
// Make a request for a user with a given ID
 axios.get('https://localhost:44351/api/Products')
  .then(function (response) {
    // handle success
   console.log(response);
   products= response.data; 
   //products.push(response.data[0])
    console.log(products)
  });

 axios.post(`https://localhost:44351/api/Products`,  {
  productID: 23,
  productName: 'Item name ' + 2,
  productPrice: 2100 + 13
 })
.then(res => {
  console.log(res);
  console.log(res.data);
 });

addProducts(10)
 
  
const columns = [{
  
  dataField: 'productID',
  text: 'ID Produktu',
  sort: true
}, {
  dataField: 'productName',
  text: 'Nazwa Produktu',
  sort: true
}, {
  dataField: 'productPrice',
  text: 'Cena Produktu',
  sort: true
}];

const defaultSorted = [{
  dataField: 'id',
  order: 'asc'
}];

 function addProducts(quantity) {
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



const CaptionElement = () => <h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'black', border: '1px solid black', padding: '0.5em' }}>Produkty ale w przyszłości przychody</h3>;


export default () =>
<div class="row justify-content-center"><BootstrapTable class="table table-bordered table-striped text-center" bootstrap4  caption={<CaptionElement />} keyField='id' data={products} columns={ columns } defaultSorted={ defaultSorted } />
 </div>
  
  