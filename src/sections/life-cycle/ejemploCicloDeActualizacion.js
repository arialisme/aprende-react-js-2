import React, { Component } from "react";
import PropTypes from "prop-types";

const ANIMAL_IMAGES = {
  cat: "https://goo.gl/PoQQXb",
  dolphin: "https://goo.gl/BbiKCd",
  panda: "https://goo.gl/oNbtoq",
};

class AnimalImage extends Component {
  state = { src: ANIMAL_IMAGES[this.props.animal] };

  componentWillReceiveProps(nextProps) {
    /*nextProps pueden ser las mismas props que tenemos pero entrará igualmete a este método. 
      Nuevas props no requieren decir que son distintas a las que teníamos */
    console.log("componentWillReciveProps");
    console.log(nextProps);
    this.setState({ src: ANIMAL_IMAGES[nextProps.animal] });
  }

  render() {
    console.log("render del componente AnimalImage");
    return (
      <div>
        <p>Selected {this.props.animal}</p>
        <img alt={this.props.animal} src={this.state.src} width="250" />
      </div>
    );
  }
}

AnimalImage.propTypes = {
  animal: PropTypes.oneOf(["cat", "dolphin", "panda"]),
};

AnimalImage.defaultProps = { animal: "panda" };

class EjemploDeCicloDeActualizacion extends Component {
  state = { animal: "panda" };

  render() {
    console.log("render del componente EjemploDeCicloDeActualizacion");
    return (
      <div>
        <h4>Ciclo de Actualización, Ejemplo de: ComponentWillReceiveProps </h4>
        <button onClick={() => this.setState({ animal: "panda" })}>
          Panda
        </button>
        <button onClick={() => this.setState({ animal: "cat" })}>Cat</button>
        <button onClick={() => this.setState({ animal: "dolphin" })}>
          Dolphin
        </button>
        <AnimalImage animal={this.state.animal} />
      </div>
    );
  }
}

export default EjemploDeCicloDeActualizacion;
