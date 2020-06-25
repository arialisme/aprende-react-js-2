import React, { Component } from "react";
import EjemploDeCicloDeActualizacion from "./sections/life-cycle/ejemploCicloDeActualizacion";
import "./App.css";

class App extends Component {
  render() {
    console.log("render del componente App");
    return (
      <div className="App">
        <EjemploDeCicloDeActualizacion />
      </div>
    );
  }
}

export default App;
