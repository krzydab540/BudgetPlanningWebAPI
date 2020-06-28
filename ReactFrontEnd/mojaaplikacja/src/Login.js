import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./styles.css";
//import './App.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Table">
    
      <form onSubmit={handleSubmit}>
      <div> Login: uzytkownik 
      <br/>
      Hasło: haslo
      </div>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="name"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit" >
          Login
        </Button>
      </form>
    </div>
  );
}