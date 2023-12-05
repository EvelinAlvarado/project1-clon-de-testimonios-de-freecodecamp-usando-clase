import React from "react"; //desde el 2020, version React 17, no requiere que se importe explicitamente
import "../stylesheets/Testimonio.css"; //importando css

// CREANDO COMPONENTE DE CLASE

class Testimonio extends React.Component {
  /* 1) Todos los componentes de clase deben tener un método render para retornar la estructura JSX */
  render() {
    /* 2) Estructura JSX */
    /* 3) En los componentes de CLASE para acceder al objeto de propiedades "props" se tiene que incluir "this" antes de props */
    return (
      <div className="contenedor-testimonio">
        {/* src= {} para insertar codigo JS, y para insertar una imagen se necesita usar "require()" o tb "import". Ademas se pone en template string la url*/}
        <img
          className="imagen-testimonio"
          src={require(`../imagens/testimonio-${this.props.imagen}.png`)}
          alt={`Foto de ${this.props.nombre}`}
        />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio">
            <strong>{this.props.nombre}</strong> in {this.props.pais}
          </p>
          <p className="cargo-testimonio">
            {this.props.cargo} at <strong>{this.props.empresa}</strong>
          </p>
          <p className="texto-testimonio">"{this.props.testimonio}"</p>
        </div>
      </div>
    );
  }
}

export default Testimonio;
