import React, { useState } from "react";
import Axios from "axios";
import isEqual from 'lodash/isEqual';
import { useFormik } from "formik";
import "./App.css";
import Table13 from "./Table13";
import Gradient1 from "./Gradient1";
import Gradient2 from "./Gradient12";
import Home from "./Home";
import Nav from "./Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

let encodedString;



export default function Fetcher({ url }) {
  const [data1, setData1] = useState([null]);
  const [data2, setData2] = useState();
  
  const [data3, setData3] = useState({ token: "" }); //{token: ''}
  
  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Required";
    } else if (values.username.length < 3) {
      errors.username = "Must be 3 characters or more";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  };

  const SignupForm = () => {
    const formik = useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validate,

      onSubmit: (values) => {
        setData1({
          username: values.username,
          password: values.password,
        });

        console.log(JSON.stringify(values));
        console.log("kodowanie");
        encodedString = new Buffer(JSON.stringify(values)).toString("base64");
      
        const loadData = async (encodedString) => {
          await Axios.get(
            "https://localhost:44351/api/Login?encrypted=" + encodedString
          ).then((res) => {
            const token = res.data.token;
            setData3({ token });
          });
          
        };
        loadData(encodedString);
        console.log(loadData(encodedString));

        console.log("data 2" + data2);
        console.log("==============");
        console.log("powinno byc data 3" + data3);

        console.log(data3);
        
      },
      
    });
    return (
      <form onSubmit={formik.handleSubmit} className="Buttons">
        <br />
        <div>
          {" "}
          Login: uzytkownik
          <br />
          Hasło: haslo
        </div>
        <br />
        <br />
        <input
          name="username"
          type="text"
          placeholder="Login"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <br />
        <br />
        <div>
          {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        </div>
        <input
          name="password"
          type="password"
          placeholder="Hasło"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <br />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}

        <button type="submit">Zaloguj</button>
        <br />
        <br />
        <br />
        <br />
        <br />
      </form>
    );
  };

 
var other = { token: "" };

  if (isEqual(data3,other)) { console.log("data3");
    return (
      <div className="App.css">
        <SignupForm />
      </div>
    );
  }
  console.log(data3)
  
  return (
    
    <Router>
      <div className="Table">
        <Nav />
        <Gradient1 />
        <Gradient2 />
        <div className="Home2">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tab" render={(props) => <Table13 {...props} value={data3} />}   />
            <Route path="/tab2" render={(props) => <Table13 {...props} value={data3} />}  />
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
