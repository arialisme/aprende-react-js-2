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

function useCondicionalRendering(mostrarA) {
  if (mostrarA) {
    return <ComponenteA />;
  }
  return <ComponenteB />;
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
        {useCondicionalRendering(this.state.mostrarA)}
      </div>
    );
  }
}
