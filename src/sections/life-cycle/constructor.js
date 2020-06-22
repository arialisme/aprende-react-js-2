import React, { Component } from "react";
import "./App.css";

class App extends Component {
  /* Constructor por defecto
  constructor(...args) {
    super(...args);
  }
*/

  constructor(props) {
    console.log("constructor");
    super(props); //Este método llama al constructor de Component
    //Inicializamos el state de nuestro componente, se le asigna un objeto a la propiedad this.state
    this.state = { mensajeInicial: "Mensaje Inicial " };
    /*Bindeamos el contexto al método, mediante la propiedad bind que devuelve el mismo método con el contexto que le 
    hemos pasado por parámetro enlazado a la ejecución de la función  
    this.handleClick = this.handleClick.bind(this); */
  }

  // = () => Usar Arrow function es más simple que usar el método bind
  handleClick = () => {
    console.log("handleClick");
    this.setState({ mensajeInicial: "Mensaje cambiado" });
  };

  render() {
    console.log("render");
    return (
      <div className="App">
        <h4>Ciclo de Montaje: Constructor</h4>
        {this.state.mensajeInicial}
        <button onClick={this.handleClick}>Cambiar Mensaje</button>
      </div>
    );
  }
}

export default App;
