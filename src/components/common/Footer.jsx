const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>🎮 PokéApp</h5>
            <p className="text-muted">
              Aplicación web desarrollada con React para consultar información de Pokémon.
            </p>
          </div>
          <div className="col-md-3">
            <h6>Enlaces</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-decoration-none text-muted">Inicio</a></li>
              <li><a href="/lista" className="text-decoration-none text-muted">Lista</a></li>
              <li><a href="/contacto" className="text-decoration-none text-muted">Contacto</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Desarrolladores</h6>
            <ul className="list-unstyled text-muted">
              <li>Matias Galvan</li>
              <li>Juan Aguirre</li>
              <li>Luis Galvan</li>
              <li>Samir Alfonso</li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary" />
        <div className="text-center text-muted">
          <p className="mb-0">© 2024 PokéApp - TECSUP. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;