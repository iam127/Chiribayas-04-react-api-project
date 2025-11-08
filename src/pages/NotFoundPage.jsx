import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ minHeight: '60vh' }}
      >
        <div className="col-md-6 text-center">

          <div className="mb-4">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
              alt="Psyduck confundido"
              className="img-fluid"
              style={{ maxWidth: '300px' }}
            />
          </div>

          <h1 className="display-1 fw-bold text-primary">404</h1>
          <h2 className="mb-3">Página no encontrada</h2>

          <p className="lead text-muted mb-4">
            Esta página se perdió en la hierba alta.  
            ¿Deseas volver a la zona segura?
          </p>

          <div className="d-flex gap-3 justify-content-center">
            <Link to="/" className="btn btn-primary btn-lg">
              Inicio
            </Link>

            <Link to="/lista" className="btn btn-outline-primary btn-lg">
              Ver Lista
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
