import "./App.css";
// ---IMPORTAR COMPONENTE--
import Testimonio from "./components/Testimonio.js";
import { Fragment } from "react"; //para usar fragment

// ---COMPONENTE PRINCIPAL DE LA APP---
function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        {/* renderizar componentess
         */}
        <Testimonio
          imagen="shawn"
          nombre="Shawn Wang"
          pais="Singapore"
          cargo="Software Engineer"
          empresa="Amazon"
          testimonio={[
            <Fragment>
              It's scary to change careers. I only gained confidence that I
              could code by working through the hundreds of hours of free
              lessons on freeCodeCamp. Within a year I had a six-figure job as a
              Software Engineer. <strong>freeCodeCamp changed my life</strong>.
            </Fragment>,
          ]}
        />
        <Testimonio
          imagen="sarah"
          nombre="Sarah Chima"
          pais="Nigeria"
          cargo="Software Engineer"
          empresa="ChatDesk"
          testimonio={[
            <Fragment>
              <strong>freeCodeCamp was the gateway to my career</strong> as a
              software developer. The well-structured curriculum took my coding
              knowledge from a total beginner level to a very confident level.
              It was everything I needed to land my first dev job at an amazing
              company.
            </Fragment>,
          ]}
        />
        <Testimonio
          imagen="emma"
          nombre="Emma Bostian"
          pais="Sweden"
          cargo="Software Engineer"
          empresa="Spotify"
          testimonio={[
            <Fragment>
              I've always struggled with learning JavaScript. I've taken many
              courses but freeCodeCamp's course was the one which stuck.
              Studying JavaScript as well as data structures and algorithms on{" "}
              <strong>freeCodeCamp gave me the skills</strong> and confidence I
              needed to land my dream job as a software engineer at Spotify.
            </Fragment>,
          ]}
        />
      </div>
    </div>
  );
}

export default App;
/* 
TODO: 
-hacer la pagina responsive
-cambiar el nombre del valor del atributo alt con los nombres
-guardar los valores de los props en otro archivo, recopilar los datos en un objeto de JS y luego importarlos. Y usarlos para generar cada uno de los testimonios
 */
