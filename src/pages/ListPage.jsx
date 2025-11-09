import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterBar from '../components/list/FilterBar';
import EntityCard from '../components/list/EntityCard';
import Pagination from '../components/list/Pagination';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorAlert from '../components/common/ErrorAlert';
import useEntities from '../hooks/useEntities';

const ListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get('page')) || 1
  );
  const [itemsPerPage, setItemsPerPage] = useState(
    Number(searchParams.get('limit')) || 20
  );
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get('search') || ''
  );
  const [filterType, setFilterType] = useState(
    searchParams.get('type') || ''
  );

  const offset = (currentPage - 1) * itemsPerPage;
  const { entities, loading, error, totalCount } = useEntities(
    itemsPerPage,
    offset,
    searchTerm,
    filterType
  );

  const totalPages = Math.ceil(totalCount / itemsPerPage);

  useEffect(() => {
    const params = {};
    if (currentPage > 1) params.page = currentPage;
    if (itemsPerPage !== 20) params.limit = itemsPerPage;
    if (searchTerm) params.search = searchTerm;
    if (filterType) params.type = filterType;
    
    setSearchParams(params);
  }, [currentPage, itemsPerPage, searchTerm, filterType, setSearchParams]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemsPerPageChange = (newLimit) => {
    setItemsPerPage(newLimit);
    setCurrentPage(1);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setFilterType('');
    setCurrentPage(1);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">📋 Lista de Pokémon</h1>

      <FilterBar
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />

      {loading && <LoadingSpinner />}

      {error && <ErrorAlert message={error} />}

      {!loading && !error && entities.length === 0 && (
        <div className="alert alert-info text-center">
          No se encontraron resultados
        </div>
      )}

      {!loading && !error && entities.length > 0 && (
        <>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {entities.map((entity) => (
              <EntityCard key={entity.id} entity={entity} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        </>
      )}
    </div>
  );
};

export default ListPage;