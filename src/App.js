import React, { Component } from "react";
import EjemploDeComponentDidMount from "./sections/life-cycle/componentDidMount";
import "./App.css";

class App extends Component {
  render() {
    console.log("render del componente App");
    return (
      <div className="App">
        <EjemploDeComponentDidMount />
      </div>
    );
  }
}

export default App;
