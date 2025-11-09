import { useState, useEffect } from 'react';
import entityService from '../services/entityService';

const useEntities = (limit = 20, offset = 0, searchTerm = '', filterType = '') => {
  const [entities, setEntities] = useState([]);
  const [allPokemon, setAllPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const loadAllPokemon = async () => {
      try {
        setLoading(true);
        const data = await entityService.getAll(500, 0);
        
        const detailedPromises = data.results.map(entity =>
          entityService.getById(entity.name)
        );
        const allDetails = await Promise.all(detailedPromises);
        
        setAllPokemon(allDetails);
        setTotalCount(allDetails.length);
      } catch (err) {
        console.error('Error loading pokemon:', err);
        setError('Error al cargar los Pokémon');
      } finally {
        setLoading(false);
      }
    };

    if (allPokemon.length === 0) {
      loadAllPokemon();
    }
  }, []);

  useEffect(() => {
    if (allPokemon.length === 0) return;

    let filtered = [...allPokemon];

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(pokemon => {
        const nameMatch = pokemon.name.toLowerCase().includes(searchLower);
        const abilityMatch = pokemon.abilities?.some(a => 
          a.ability.name.toLowerCase().includes(searchLower)
        );
        return nameMatch || abilityMatch;
      });
    }

    if (filterType) {
      filtered = filtered.filter(pokemon =>
        pokemon.types.some(t => t.type.name === filterType)
      );
    }

    if (searchTerm) {
      setEntities(filtered);
    } else {
      const start = offset;
      const end = offset + limit;
      setEntities(filtered.slice(start, end));
    }
    
    setTotalCount(filtered.length);
  }, [allPokemon, searchTerm, filterType, limit, offset]);

  return { entities, loading, error, totalCount };
};

export default useEntities;