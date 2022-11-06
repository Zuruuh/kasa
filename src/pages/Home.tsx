import { useFetch } from '../hooks/useFetch';
import type { Housing } from '../types/housing/Housing';

const Home: React.FC = () => {
  const housings = useFetch<Housing[]>('/data/housings.json');

  return <div>{housings ? 'Data loaded!' : 'fetching...'}</div>;
};

export const URI = '/';

export default Home;
