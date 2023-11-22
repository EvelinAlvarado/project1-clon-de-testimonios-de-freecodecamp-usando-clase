import React from "react"; //desde el 2020, version React 17, no requiere que se importe explicitamente
import "../stylesheets/Testimonio.css"; //importando css

// CREANDO COMPONENTE FUNCIONAL
function Testimonio(props) {
  // retornamos un JSX
  return (
    <div className="contenedor-testimonio">
      {/* src= {} para insertar codigo JS, y para insertar una imagen se necesita usar "require()" o tb "import". Ademas se pone en template string la url*/}
      <img
        className="imagen-testimonio"
        src={require(`../imagens/testimonio-${props.imagen}.png`)}
        alt="Foto de Emma"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> in {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} at <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}
// Exportar EL COMPONENTE para renderizar en App.js
/* ---2 tipos de exportacion: */
/* 
?-----------NOMBRADA: se pueden exportar varios elemento de un mismo archivo (deben ser especificados) ejm: */
/* 
export function Testimonio() {....}
-en el archivo que se va a importar "Testimonio" entre { }:
import { Testimonio } from "./components/Testimonio.js" 
*/
/*
?-----------DEFAULT: se escribe el nombre del unico elemento del arhivo que va a ser exportado. */
export default Testimonio;
