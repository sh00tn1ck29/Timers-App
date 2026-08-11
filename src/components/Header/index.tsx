import { useEffect, useState } from 'react';
import Navigation from '../Navigation';
import './index.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <span className="header__logo">Timers App</span>
      <Navigation isOpen={isOpen} toggleMenu={toggleMenu} />
      <span className="header__burger-btn" onClick={toggleMenu}></span>
    </header>
  );
};

export default Header;
