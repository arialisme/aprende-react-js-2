import React, { Component } from "react";
import Forms from "./sections/forms";
import "./App.css";

class App extends Component {
  render() {
    console.log("Estoy en el render del componente App");
    return (
      <div className="App">
        <Forms />
      </div>
    );
  }
}

export default App;
