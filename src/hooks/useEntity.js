import { useState, useEffect } from 'react';
import entityService from '../services/entityService';

const useEntity = (id) => {
  const [entity, setEntity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEntity = async () => {
      if (!id) return;

      try {
        setLoading(true);
        setError(null);
        const data = await entityService.getById(id);
        setEntity(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEntity();
  }, [id]);

  return { entity, loading, error };
};

export default useEntity;
