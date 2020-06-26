import React, { Component } from "react";
import RefactorDeEjemploDeCicloDeActualizacion from "./sections/life-cycle/shouldComponentUpdate_Con_Pure_Components";
import "./App.css";

class App extends Component {
  render() {
    console.log("render del componente App");
    return (
      <div className="App">
        <RefactorDeEjemploDeCicloDeActualizacion />
      </div>
    );
  }
}

export default App;
