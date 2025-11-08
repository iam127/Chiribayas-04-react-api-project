import { useEffect, useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import PopularSection from '../components/home/PopularSection';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorAlert from '../components/common/ErrorAlert';
import entityService from '../services/entityService';

const HomePage = () => {
  const [popularEntities, setPopularEntities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPopularEntities = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await entityService.getPopular();
      setPopularEntities(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPopularEntities();
  }, []);

  return (
    <div>
      <HeroSection />
      
      <div className="container my-5">
        {loading && <LoadingSpinner />}
        
        {error && (
          <ErrorAlert 
            message={error} 
            onRetry={fetchPopularEntities} 
          />
        )}
        
        {!loading && !error && (
          <PopularSection entities={popularEntities} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
