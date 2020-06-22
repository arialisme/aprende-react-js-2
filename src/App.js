import React, { Component } from "react";
import ComponentWillMount from "./sections/life-cycle/componentWillMount";
import "./App.css";

class App extends Component {
  render() {
    console.log("render del componente App");
    return (
      <div className="App">
        <ComponentWillMount />
      </div>
    );
  }
}

export default App;
