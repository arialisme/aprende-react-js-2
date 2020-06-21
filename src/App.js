import React, { Component } from "react";
import "./App.css";

class Box extends Component {
  render() {
    console.log("Estoy en el render del componente Box");
    return (
      <div style={{ border: "1px solid #09F", margin: 5, padding: 5 }}>
        {this.props.children}
      </div>
    );
  }
}

class App extends Component {
  render() {
    console.log("Estoy en el render del componente App");
    return (
      <div className="App">
        <h4>Children props</h4>
        <Box>Hola! soy un children!</Box>
        <Box>Box con otro contenido</Box>
      </div>
    );
  }
}

export default App;
