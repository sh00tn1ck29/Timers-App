import Headline from '@/components/Headline';
import TimersSection from '@/components/TimersSection';
import Header from '@components/Header';
import './index.scss';

export const HomePage = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Headline />
      </div>
      <TimersSection />
    </>
  );
};

export default HomePage;
