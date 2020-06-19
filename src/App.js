import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = { name: "Elaimy Arias Lismé" };

  render() {
    return (
      <div className="App">
        <h2>Hello {this.state.name}</h2>
        <p>
          Este componente de ejemplo es para que veas como inicializar el estdo
          de otra. Prueba!!
        </p>
      </div>
    );
  }
}

export default App;
