import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const productName = form.elements["productName"].value;
    const productID = form.elements["productID"].value;
    const productPrice = form.elements["productPrice"].value;
    this.props.addPerson(productID, productName,productPrice);
    form.reset();
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        
        <input id="productID" type="text" defaultValue="" placeholder="ID" />
        <input id="productName" type="text" defaultValue="" placeholder="Name..." />
        <input id="productPrice" type="text" defaultValue="" placeholder="ID" />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Form;