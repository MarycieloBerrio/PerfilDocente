import React from 'react'
import "./Investigacion.css"

const Investigacion = () => {
  return (
    <div className="inv-container">
      <div className="articles-container">
        <article className="inv-article">
          <div className="header-article">
            <h2 className="title-article">Áreas de investigación</h2>
            <hr />
          </div>
          <ul className="lista">
            <li>Alquimia y preparación de pociones avanzadas.</li>
            <li>Efectos mágicos de ingredientes naturales.</li>
            <li>Aplicaciones médicas de la alquimia.</li>
            <li>Historia y desarrollo de las artes mágicas.</li>
          </ul>
        </article>
        <article className="inv-article">
          <div className="header-article">
            <h2 className="title-article">Investigaciones actuales</h2>
            <hr />
          </div>
          <ul className="lista">
            <li>Desarrollo de una Poción Estimulante del Crecimiento 
              para Plantas Mágicas: Investigación sobre la creación 
              de una poción que mejore el crecimiento y la salud de 
              las plantas mágicas, con aplicaciones en herbología y 
              jardinería mágica.</li>
            <li>Elaboración de Pociones Antídoto para Venenos Mágicos: 
              Estudio sobre la eficacia de diferentes ingredientes en 
              la preparación de pociones antídoto para una variedad de 
              venenos mágicos, con implicaciones en la medicina mágica 
              y la defensa contra las artes oscuras.</li>
          </ul>
        </article>
        <article className="inv-article">
          <div className="header-article">
            <h2 className="title-article">Eventos</h2>
            <hr />
          </div>
          <ul className="lista">
            <li>2022: Conferencia Internacional de Pociones Avanzadas, 
              Hogwarts - Nuevos descubrimientos en el uso de la raíz 
              de asfódelo</li>
            <li>2016: Congreso de Botánica Mágica y Pociones, Herbología
              - Integración de plantas mágicas en pociones para la 
              curación</li>
            <li>2008: Exposición Anual de Innovaciones en Pociones, 
              Diagon Alley - Avances recientes en equipamiento para 
              pociones</li>
          </ul>
        </article>
      </div>

      <article className="grupos-inv">
        <h3>Grupos de investigación</h3>
        <ul>
          <li>
            <div className="grupo-inv">
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
            <div className="grupo-inv">
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
            <div className="grupo-inv">
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

export default Investigacion