import { useState, useEffect } from 'react';
import entityService from '../services/entityService';

const useEntities = (limit = 20, offset = 0, searchTerm = '', filterType = '') => {
  const [entities, setEntities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchEntities = async () => {
      try {
        setLoading(true);
        setError(null);

        if (searchTerm) {
          const result = await entityService.searchByName(searchTerm);
          setEntities([result]);
          setTotalCount(1);
        } else {
          const data = await entityService.getAll(limit, offset);
          setTotalCount(data.count);

          const detailedPromises = data.results.map(entity =>
            entityService.getById(entity.name)
          );
          const detailedResults = await Promise.all(detailedPromises);
          
          let filteredResults = detailedResults;
          if (filterType) {
            filteredResults = detailedResults.filter(entity =>
              entity.types.some(t => t.type.name === filterType)
            );
          }
          
          setEntities(filteredResults);
        }
      } catch (err) {
        setError(err.message);
        setEntities([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEntities();
  }, [limit, offset, searchTerm, filterType]);

  return { entities, loading, error, totalCount };
};

export default useEntities;
