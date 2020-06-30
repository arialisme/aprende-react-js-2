import React, { Component } from "react";
import EjemploDeComponentWillUnmonunt from "./sections/life-cycle/componentWillUnmount";
import "./App.css";

class App extends Component {
  render() {
    console.log("render del componente App");
    return (
      <div className="App">
        <EjemploDeComponentWillUnmonunt />
      </div>
    );
  }
}

export default App;
