import { useState, useEffect } from 'react';

const FilterBar = ({ onFilterChange, onSearch, onClearFilters }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const pokemonTypes = [
    'normal', 'fire', 'water', 'electric', 'grass', 'ice',
    'fighting', 'poison', 'ground', 'flying', 'psychic',
    'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
  ];

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (searchTerm) {
        onSearch(searchTerm);
      }
    }, 500);

    return () => clearTimeout(delaySearch);
  }, [searchTerm, onSearch]);

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
              🔍 Buscar por nombre
            </label>
            <input
              id="searchInput"
              type="text"
              className="form-control"
              placeholder="Ej: pikachu"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
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