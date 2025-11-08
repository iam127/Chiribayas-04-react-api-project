import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-primary text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-3 fw-bold mb-3">
              Bienvenido a PokéApp
            </h1>
            <p className="lead mb-4">
              Explora el fascinante mundo de los Pokémon. Descubre sus 
              habilidades, tipos, estadísticas y mucho más en nuestra 
              completa base de datos.
            </p>
            <div className="d-flex gap-3">
              <Link to="/lista" className="btn btn-light btn-lg">
                Ver Lista Completa
              </Link>
              <Link to="/contacto" className="btn btn-outline-light btn-lg">
                Contacto
              </Link>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
              alt="Pikachu"
              className="img-fluid"
              style={{ maxHeight: '400px', filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.3))' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
