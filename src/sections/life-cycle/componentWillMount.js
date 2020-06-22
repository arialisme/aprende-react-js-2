import React, { Component } from "react";

class ComponentWillMount extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = { mensaje: "mensaje inicial" };
  }

  componentWillMount() {
    console.log("componetWillMount");
    this.setState({ mensaje: "mesaje modificado" });
  }

  render() {
    console.log("render del componente ComponetWillMount");
    return (
      <div>
        <h4>Ciclo de Montaje: ComponentWillMount</h4>
        <p>{this.state.mensaje}</p>
      </div>
    );
  }
}

export default ComponentWillMount;
