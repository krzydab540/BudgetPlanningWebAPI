import React from "react";
//import ReactDOM from "react-dom";
import { useFormik } from "formik";
import "./styles.css";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: { productID: "", productName: "", productPrice:"" },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="productID">productID</label>
      <input
        id="productID"
        name="productID"
        type="number"
        placeholder="ID produktu"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
       <label htmlFor="productName">productName</label>
      <input
        id="productName"
        name="productName"
        type="text"
        placeholder="Nazwa produktu"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
       <label htmlFor="productPrice">productPrice</label>
      <input
      id="productPrice"
        name="productPrice"
        type="number"
        placeholder="Cena produktu"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm