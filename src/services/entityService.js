import api from './api';

const entityService = {
  getAll: async (limit = 20, offset = 0) => {
    try {
      const response = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener las entidades');
    }
  },

  getById: async (id) => {
    try {
      const response = await api.get(`/pokemon/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener la entidad');
    }
  },

  getPopular: async () => {
    try {
      const response = await api.get('/pokemon?limit=8&offset=0');
      const results = response.data.results;
      
      const detailedPromises = results.map(pokemon => 
        api.get(pokemon.url)
      );
      
      const detailedResults = await Promise.all(detailedPromises);
      return detailedResults.map(res => res.data);
    } catch (error) {
      throw new Error('Error al obtener entidades populares');
    }
  },

  searchByName: async (name) => {
    try {
      const response = await api.get(`/pokemon/${name.toLowerCase()}`);
      return response.data;
    } catch (error) {
      throw new Error('Entidad no encontrada');
    }
  }
};

export default entityService;