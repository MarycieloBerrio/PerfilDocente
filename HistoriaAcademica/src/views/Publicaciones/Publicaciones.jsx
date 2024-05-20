import React from 'react'
import "./Publicaciones.css"

const Publicaciones = () => {
  return (
    <div className="publicaciones-container">
      <div className="articles-container">
        <article className="publicaciones-article">
          <div className="header-article">
            <h2 className="title-article">Publicaciones</h2>
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
      </div>

      <article className="grupos-investigacion">
        <h3>Grupos de investigación</h3>
        <ul>
          <li>
            <div className="grupo-investigacion">
              <div className="header-pub">
                <h4>Nombre del grupo</h4>
                <p>Área de investigación</p>
              </div>
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </p>
            </div>
          </li>
          <li>
            <div className="grupo-investigacion">
              <div className="header-pub">
                <h4>Nombre del grupo</h4>
                <p>Área de investigación</p>
              </div>
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </p>
            </div>
          </li>
          <li>
            <div className="grupo-investigacion">
              <div className="header-pub">
                <h4>Nombre del grupo</h4>
                <p>Área de investigación</p>
              </div>
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </p>
            </div>
          </li>
        </ul>
      </article>
    </div>
  )
}

export default Publicaciones