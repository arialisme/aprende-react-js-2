import React, { Component } from "react";
import EjemploDeComponentDidCatch from "./sections/life-cycle/componentDidCatch";
import "./App.css";

class App extends Component {
  render() {
    console.log("render del componente App");
    return (
      <div className="App">
        <EjemploDeComponentDidCatch />
      </div>
    );
  }
}

export default App;
