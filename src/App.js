import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

class Contador extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props.contadorInicial);
    console.log("Entre en constructor de Contador");
    this.state = { contador: this.props.contadorInicial };
  }
  render() {
    console.log("renderizado de Contador");
    return <ContadorNumero numero={this.state.contador} />;
  }
  componentDidMount() {
    setTimeout(() => {
      console.log("Ya esta montado  Contador");
      var id = setInterval(() => {
        this.setState({ contador: this.state.contador + 1 });
        if (this.state.contador === 3) clearInterval(id);
      }, 1000);
    }, 5000);
  }
}

Contador.defaultProps = { contadorInicial: 0 };

class ContadorNumero extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props.contadorInicial);
    console.log("Entre en constructor de ContadorNumero");
  }
  render() {
    console.log("renderizado de ContadorNumero");
    return <span>{this.props.numero}</span>;
  }
}
class App extends Component {
  render() {
    console.log("renderizado de App");
    return (
      <div className="App">
        <p>Primer componente con state</p>
        <Contador contadorInicial={1} />
      </div>
    );
  }
}

export default App;
