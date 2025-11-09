const EntityCard = ({ entity }) => {
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
      normal: '#A8A878',
      fighting: '#C03028',
      flying: '#A890F0',
      poison: '#A040A0',
      ground: '#E0C068',
      rock: '#B8A038',
      bug: '#A8B820',
      ghost: '#705898',
      steel: '#B8B8D0'
    };
    return colors[type] || '#A8A878';
  };

  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <div className="card-img-top bg-light d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
          <img
            src={entity.sprites?.front_default || 'https://via.placeholder.com/150'}
            alt={entity.name}
            className="img-fluid"
            style={{ maxHeight: '150px' }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title text-capitalize">
            #{entity.id} {entity.name}
          </h5>
          <div className="d-flex gap-2 flex-wrap mb-2">
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
          <p className="card-text text-muted mb-2">
            <small>
              <strong>Altura:</strong> {entity.height / 10} m | 
              <strong> Peso:</strong> {entity.weight / 10} kg
            </small>
          </p>
          <div className="mb-2">
            <strong className="d-block mb-1">Habilidades:</strong>
            <div className="d-flex gap-1 flex-wrap">
              {entity.abilities?.slice(0, 3).map((abilityInfo) => (
                <span key={abilityInfo.ability.name} className="badge bg-secondary">
                  {abilityInfo.ability.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntityCard;