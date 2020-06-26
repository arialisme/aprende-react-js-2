import React, { Component } from "react";
import RefactorDeEjemploDeCicloDeActualizacion from "./sections/life-cycle/componentWillUpddate";
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
