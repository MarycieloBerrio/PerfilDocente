import React from 'react'
import "./Asignaturas.css"

const Asignaturas = () => {
  return (
    <div className="asignaturas-container">
      <div className="articles-container">
        <article className="asignaturas-article">
          <div className="header-article">
            <h2 className="title-article">Asignaturas 2024-1</h2>
            <hr />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue
            ante ut fringilla cursus. Vivamus eu egestas ante. In quis velit
            congue, tincidunt tellus a, laoreet erat. Cras congue blandit
            tempor. Praesent et elit scelerisque, fermentum risus ac, egestas
            massa. Quisque laoreet eros arcu, sit amet pretium justo convallis
            sit amet. Morbi mollis eget est in elementum.
          </p>
        </article>
        <article className="asignaturas-article">
          <div className="header-article">
            <h2 className="title-article">Asignaturas dictadas en semestres anteriores</h2>
            <hr />
          </div>
          <ul className="lista">
            <li>Premio al Mérito Académico en Pociones Avanzadas</li>
            <li>Medalla de Honor del Consejo de Maestros de Hogwarts</li>
            <li>Premio de Investigación en Artes Mágicas</li>
          </ul>
        </article>
      </div>
    </div>
  )
}

export default Asignaturas