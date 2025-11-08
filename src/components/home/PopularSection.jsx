import { Link } from 'react-router-dom';

const PopularSection = ({ entities }) => {
  const getTypeColor = (type) => {
    const colors = {
      fire: '#F08030',
      water: '#6890F0',
      grass: '#78C850',
      electric: '#F8D030',
      psychic: '#F85888',
      ice: '#98D8D8',
      dragon: '#7038F8',
      dark: '#705848',
      fairy: '#EE99AC',
      normal: '#A8A878'
    };
    return colors[type] || '#A8A878';
  };

  return (
    <section>
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold mb-3">⭐ Pokémon Destacados</h2>
        <p className="text-muted">
          Descubre algunos de los Pokémon más populares
        </p>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-4">
        {entities.map((entity) => (
          <div key={entity.id} className="col">
            <div className="card h-100 shadow-sm hover-card">
              <div 
                className="card-img-top d-flex justify-content-center align-items-center bg-light" 
                style={{ height: '200px' }}
              >
                <img
                  src={entity.sprites?.front_default}
                  alt={entity.name}
                  className="img-fluid"
                  style={{ maxHeight: '150px' }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-capitalize">
                  #{entity.id} {entity.name}
                </h5>
                <div className="d-flex gap-2 mb-3">
                  {entity.types?.map((typeInfo) => (
                    <span
                      key={typeInfo.type.name}
                      className="badge"
                      style={{
                        backgroundColor: getTypeColor(typeInfo.type.name),
                        color: 'white'
                      }}
                    >
                      {typeInfo.type.name}
                    </span>
                  ))}
                </div>
                <p className="card-text text-muted small">
                  Altura: {entity.height / 10}m • Peso: {entity.weight / 10}kg
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/lista" className="btn btn-primary btn-lg">
          Ver Todos los Pokémon →
        </Link>
      </div>
    </section>
  );
};

export default PopularSection;
