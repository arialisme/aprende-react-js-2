import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

class Box extends Component {
  render() {
    console.log("Estoy en el render del componente Box");
    return (
      <div style={{ border: "1px solid #09F", margin: 5, padding: 5 }}>
        {this.props.children}
      </div>
    );
  }
}

class Article extends Component {
  static propTypes = { author: PropTypes.string.isRequired };

  render() {
    console.log("Estoy en el componente Article");
    const { author, children, date, title } = this.props;
    return (
      <section>
        <h2>{title}</h2>
        {author && (
          <p>
            <em>Escrito por {author}</em>
          </p>
        )}
        <Box>{date}</Box>
        <article>{children}</article>
      </section>
    );
  }
}

class App extends Component {
  render() {
    console.log("Estoy en el render del componente App");
    return (
      <div className="App">
        <h4>Children props</h4>
        <Article
          date={new Date().toLocaleDateString()}
          title="Artículo sobre la prop children"
        >
          <p>
            El contenido que envolvemos dentro del Componente Article será
            enviado al componente como this.props.children.
          </p>
          <strong>
            Y mantiene las etiquetas y componentes que hayas añadido dentro.
          </strong>
        </Article>

        <Article
          author="Gabriel"
          date={new Date().toLocaleDateString()}
          title="Artículo 2"
        >
          <p>
            El contenido que envolvemos dentro del Componente Article será
            enviado al componente como this.props.children.
          </p>
          <strong>
            Y mantiene las etiquetas y componentes que hayas añadido dentro.
          </strong>
        </Article>

        <Article
          author="Elaimy Arias Lismé"
          date={new Date().toLocaleDateString()}
          title="Otro Artículo"
        >
          <p>
            El contenido que envolvemos dentro del Componente Article será
            enviado al componente como this.props.children.
          </p>
          <strong>
            Y mantiene las etiquetas y componentes que hayas añadido dentro.
          </strong>
        </Article>
      </div>
    );
  }
}

export default App;
