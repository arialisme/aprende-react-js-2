import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Hello(props) {
  return <h2>Bienvenidos a este curso</h2>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello />
      </header>
    </div>
  );
}

export default App;
