import "./Biografia.css";

const Biografia = () => {
  return (
    <div className="bio-container">
      <div className="articles-container">
        <article className="bio-article">
          <div className="header-article">
            <h2 className="title-article">Biografía</h2>
            <hr />
          </div>
          <p>
            El Profesor Severus Snape, con una amplia experiencia en el campo de
            las pociones, es actualmente Profesor Asociado en la Facultad de
            Minas de la UNAL. Posee un Doctorado en Pociones de la Universidad
            de Ginebra y una Licenciatura en Humanidades Clásicas de Oxford.
            Previamente, ocupó el cargo de Becario de Desarrollo de Carrera en
            Pociones en la misma institución. Su dedicación a la enseñanza y su
            destacada investigación lo convierten en un referente en el campo de
            las artes mágicas.
          </p>
        </article>
        <article className="bio-article">
          <div className="header-article">
            <h2 className="title-article">Premios y reconocimientos</h2>
            <hr />
          </div>
          <ul className="premios">
            <li>Premio al Mérito Académico en Pociones Avanzadas</li>
            <li>Medalla de Honor del Consejo de Maestros de Hogwarts</li>
            <li>Premio de Investigación en Artes Mágicas</li>
          </ul>
        </article>
        <article className="bio-article">
          <div className="header-article">
            <h2 className="title-article">Plan de trabajo docente</h2>
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

      <article className="publicaciones">
        <h3>Publicaciones recientes</h3>
        <ul>
          <li>
            <div className="publicacion">
              <div className="header-pub">
                <h4>Titulo de la publicación</h4>
                <p>Fecha de la publicación</p>
              </div>
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </p>
            </div>
          </li>
          <li>
            <div className="publicacion">
              <div className="header-pub">
                <h4>Titulo de la publicación</h4>
                <p>Fecha de la publicación</p>
              </div>
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </p>
            </div>
          </li>
          <li>
            <div className="publicacion">
              <div className="header-pub">
                <h4>Titulo de la publicación</h4>
                <p>Fecha de la publicación</p>
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
  );
};

export default Biografia;
