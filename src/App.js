import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Contador extends Component {
  constructor() {
    super();
    this.state = { contador: 1 };
  }

  render() {
    return <span>{this.state.contador}</span>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Primer componente con state</p>
        <Contador />
      </div>
    );
  }
}

export default App;
