import { useState } from 'react';

const FilterBar = ({ onFilterChange, onSearch, onClearFilters }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const pokemonTypes = [
    'normal', 'fire', 'water', 'electric', 'grass', 'ice',
    'fighting', 'poison', 'ground', 'flying', 'psychic',
    'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleTypeChange = (e) => {
    const type = e.target.value;
    setSelectedType(type);
    onFilterChange(type);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedType('');
    onClearFilters();
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="row g-3">
          <div className="col-md-5">
            <label htmlFor="searchInput" className="form-label">
              🔍 Buscar por nombre o habilidad
            </label>
            <input
              id="searchInput"
              type="text"
              className="form-control"
              placeholder="Ej: pika, overgrow, blaze..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <small className="text-muted">
                Buscando: "{searchTerm}"
              </small>
            )}
          </div>

          <div className="col-md-5">
            <label htmlFor="typeFilter" className="form-label">
              🏷️ Filtrar por tipo
            </label>
            <select
              id="typeFilter"
              className="form-select"
              value={selectedType}
              onChange={handleTypeChange}
            >
              <option value="">Todos los tipos</option>
              {pokemonTypes.map(type => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-2 d-flex align-items-end">
            <button
              type="button"
              className="btn btn-outline-secondary w-100"
              onClick={handleClearFilters}
            >
              🗑️ Limpiar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;