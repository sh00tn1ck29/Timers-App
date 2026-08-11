import Headline from '@/components/Headline';
import Header from '@components/Header';
import './index.scss';

export const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <Headline />
    </div>
  );
};

export default HomePage;
