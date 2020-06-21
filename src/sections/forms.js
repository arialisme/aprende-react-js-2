import React, { Component } from "react";

export default class Forms extends Component {
  handleClick(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("twitter").value;
    console.log({ name, email });
  }

  render() {
    console.log("Estoy en el render del Componente Forms");
    return (
      <div>
        <h4>Formularios</h4>
        <form>
          <p>
            <label htmlFor="name">Nombre: </label>
            <input
              id="name"
              name="userName"
              placeholder="Introduce el nombre"
            />
          </p>
          <p>
            <label htmlFor="twitter">Twitter:</label>
            <input
              id="twitter"
              name="twitterAccount"
              placeholder="Introduce tu twitter"
            />
          </p>
          <button onClick={this.handleClick}>Enviar</button>
        </form>
      </div>
    );
  }
}
