import React, { Component } from "react";

class EjemploDeComponentDidMount extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = { scroll: 0 };
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
    document.addEventListener("scroll", () => {
      this.setState({ scroll: window.scrollY });
    });
  }

  render() {
    console.log("render");

    return (
      <div>
        <h4>Ciclo de Montaje: componentDidMount</h4>
        <p>el scroll es {this.state.scroll}</p>
        <p>
          Este componente nos muestra como podemos usar el componentDidMount
        </p>
        <p>
          Como queremos añadir un evento al scroll, vamos a hacer que la ventana
          sea lo suficientemente grande como para que tenga que empujar el
          contenido hacia abajo y haga que no quepa todo el contenido en el alto
          de la página. De esta forma podemos utilizar el evento para controlar
          cuando el usuario está moviendose por el scroll.
        </p>
        <p>
          componentDidMount() se invoca inmediatamente después de que un
          componente se monte (se inserte en el árbol). La inicialización que
          requiere nodos DOM debería ir aquí. Si necesita cargar datos desde un
          punto final remoto, este es un buen lugar para instanciar la solicitud
          de red. Este método es un buen lugar para establecer cualquier
          suscripción. Si lo haces, no olvides darle de baja en
          componentWillUnmount().
        </p>
        <p>
          Puedes llamar setState() inmediatamente en componentDidMount(). Se
          activará un renderizado extra, pero sucederá antes de que el navegador
          actualice la pantalla. Esto garantiza que, aunque en este caso se
          invocará dos veces el render(), el usuario no verá el estado
          intermedio. Utiliza este patrón con precaución porque a menudo causa
          problemas de rendimiento. En la mayoría de los casos, deberías ser
          capaz de asignar el estado inicial en el constructor() en su lugar.
          Sin embargo, puede ser necesario para casos como modales y tooltips
          cuando se necesita medir un nodo DOM antes de representar algo que
          depende de su tamaño o posición.
        </p>
        <p>
          As the name suggests, after all the elements of the page is rendered
          correctly, this method is called. After the markup is set on the page,
          this technique called by React itself to either fetch the data from An
          External API or perform some unique operations which need the JSX
          elements. componentDidMount() method is the perfect place, where we
          can call the setState() method to change the state of our application
          and render() the updated data loaded JSX. For example, we are going to
          fetch any data from an API then API call should be placed in this
          lifecycle method, and then we get the response, we can call the
          setState() method and render the element with updated data.
        </p>
      </div>
    );
  }
}

export default EjemploDeComponentDidMount;
