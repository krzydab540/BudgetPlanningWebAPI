import React, { useState, useEffect } from "react";
import Axios from "axios";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
//import React from "react";
//import ReactDOM from "react-dom";
import { useFormik } from "formik";
import "./styles.css";
import './App.css';

//let products = [];

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

  //function addProducts(quantity) {
  //  const startId = products.length;
  //  for (let i = 0; i < quantity; i++) {
  //  const id = startId + i;
  //   products.push({
  //    productID: id,
  //    productName: 'Item name ' + id,
  //    productPrice: 2100 + i
  //   });

  // }
  // return products
  //}

export default function Fetcher({ url },props) {
  const [data, setData] = useState([null]);
   
  //const lightOn = () =>
  //setData(data =>  [...data, {productID: 2,
   // productName: 'Item name ' + 1,
   // productPrice: 2100 + 4} ])

    const validate = values => {
      const errors = {};
      if (!values.productID) {
        errors.productID = 'Required';
      } else if (values.productID.value > 0) {
        errors.productID = 'Must be more then 0';
      }
    
      if (!values.productName) {
        errors.productName = 'Required';
      } else if (values.productName.length < 3) {
        errors.productName = 'Must be 3 characters or more';
      }
    
      if (!values.productPrice) {
        errors.productPrice = 'Required';
      } else if (values.productPrice === Number) {
        errors.productPrice = 'Must be number';
      }
    
      return errors;
    };






  const SignupForm = () => {
    const formik = useFormik({
      initialValues: { productID: "", productName: "", productPrice:"" }, validate,
    
      onSubmit: values =>{  setData(data =>  [...data, {productID: values.productID,
      productName: values.productName,
      productPrice: values.productPrice} ])
      Axios.post(`https://localhost:44351/api/Products`,  
        {productID: values.productID,
      productName: values.productName,
      productPrice: values.productPrice});
      console.log(values.productID)
      }
     
     // onSubmit: values => {
      //  alert(JSON.stringify(values, null, 2));
     // }
    });
    return (
      
      <form onSubmit={formik.handleSubmit} className="Buttons">
       
        <input
          id="productID"
          name="productID"
          type="number"
          placeholder="ID produktu"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br/>
        <div>{formik.errors.productID ? <div>{formik.errors.productID}</div> : null}</div>
        <input
          id="productName"
          name="productName"
          type="text"
          placeholder="Nazwa produktu"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br/>
        {formik.errors.productName ? <div>{formik.errors.productName}</div> : null}
         
        <input
        id="productPrice"
          name="productPrice"
          type="number"
          placeholder="Cena produktu"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.productPrice ? <div>{formik.errors.productPrice}</div> : null}
        <br/>
        <button type="submit">Dodaj</button>
      </form>
    );
  };
  
        
  useEffect(
    () => {
      // Start it off by assuming the component is still mounted
      let mounted = true;

      const loadData = async () => {
        const response = await Axios.get('https://localhost:44351/api/Products');
        // We have a response, but let's first check if component is still mounted
        if (mounted) {
          setData(response.data);
        }
      };
      loadData();

      return () => {
        // When cleanup is called, toggle the mounted variable to false
        mounted = false;
      };
    },
    [url]
  );

  if (!data) {
    return <div>Loading data from {url}</div>;
  }

  return <div class="row justify-content-center"><BootstrapTable class="table table-bordered table-striped text-center" bootstrap4   keyField='id' data={data} columns={ columns } />
 
 
 <SignupForm/>
  </div>;
}
//<button onClick={lightOn}>On</button> 





