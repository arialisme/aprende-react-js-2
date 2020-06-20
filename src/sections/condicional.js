import React, { Component } from "react";

class ComponenteA extends Component {
  render() {
    return <p>Componente A</p>;
  }
}

class ComponenteB extends Component {
  render() {
    return <p>Componente B</p>;
  }
}

export default class CondicionalSection extends Component {
  constructor() {
    super();
    this.state = { mostrarA: true };
  }

  render() {
    return (
      <div>
        <h4>Condicional Rendering</h4>
        {this.state.mostrarA ? <ComponenteA /> : <ComponenteB />}
      </div>
    );
  }
}
