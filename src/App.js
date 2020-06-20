import React, { Component } from "react";
import cars from "./data/cars.json";
import "./App.css";

class CarItem extends Component {
  render() {
    const { car, id } = this.props;

    return (
      <li>
        <p>
          <strong>Key:</strong> {id}
        </p>
        <p>
          <strong>Nombre: </strong>
          {car.name}
        </p>
        <p>
          <strong>Marca: </strong>
          {car.company}
        </p>
      </li>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Trabajando Listas con Objetos</h4>
        <ul>
          {cars.map((car) => {
            return <CarItem id={car.id} key={car.id} car={car} />;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
