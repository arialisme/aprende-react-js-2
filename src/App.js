import React, { Component } from "react";
import Render from "./sections/life-cycle/render";
import "./App.css";

class App extends Component {
  render() {
    console.log("render del componente App");
    return (
      <div className="App">
        <Render />
      </div>
    );
  }
}

export default App;
