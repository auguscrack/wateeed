// usar LITERA Bootswatch

import './App.css';



function App() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Wateeed</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Inicio
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Aspersores</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Toberas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Temporizadores</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Valvulas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="text" placeholder="Busqueda" />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>

  );
}

export default App;
