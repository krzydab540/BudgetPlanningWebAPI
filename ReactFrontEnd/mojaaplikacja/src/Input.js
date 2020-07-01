import React from "react";
import ReactDOM from "react-dom";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "" };
    this.state = { name: "" };
    this.state = { value: "" };
  }
  myChangeHandler = (event) => {
    this.setState({ id: event.target.id });
  };

  myChangeHandler2 = (event) => {
    this.setState({ value: event.target.value });
  };

  myChangeHandler3 = (event) => {
    this.setState({ name: event.target.name });
  };

  render() {
    return (
      <form>
        <h1>
          Dane id: {this.state.id} value: {this.state.value} name:{" "}
          {this.state.name}
        </h1>
        <p>Enter id:</p>
        <input type="text" onChange={this.myChangeHandler} />
        <p>Enter name:</p>
        <input type="text" onChange={this.myChangeHandler3} />
        <p>Enter value:</p>
        <input type="text" onChange={this.myChangeHandler2} />
      </form>
    );
  }
}
export default () =>
  ReactDOM.render(<MyForm />, document.getElementById("root"));
