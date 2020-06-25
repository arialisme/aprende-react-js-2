import React, { Component } from "react";
import FetchExample from "./sections/life-cycle/fetch-example";
import "./App.css";

class App extends Component {
  render() {
    console.log("render del componente App");
    return (
      <div className="App">
        <FetchExample />
      </div>
    );
  }
}

export default App;
