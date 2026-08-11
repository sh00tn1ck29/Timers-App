import './index.scss';

interface NavigationProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const Navigation = ({ isOpen, toggleMenu }: NavigationProps) => {
  if (isOpen === false) {
    return (
      <>
        <nav className="navigation">
          <ul className="navigation-list">
            <li className="navigation-item">
              <a href="/">Features</a>
            </li>
            <li className="navigation-item">
              <a href="/">Video Tour</a>
            </li>
            <li className="navigation-item">
              <a href="/">Reviews</a>
            </li>
            <li className="navigation-item">
              <a href="/">Pricing</a>
            </li>
          </ul>
        </nav>
        <button className="header__button btn">GET IT FREE</button>
      </>
    );
  } else {
    return (
      <div className="window">
        <span className="window__close-btn" onClick={toggleMenu}></span>
        <nav className="window__nav">
          <ul className="window-list">
            <li className="window-item">
              <a href="/">Features</a>
            </li>
            <li className="window-item">
              <a href="/">Video Tour</a>
            </li>
            <li className="window-item">
              <a href="/">Reviews</a>
            </li>
            <li className="window-item">
              <a href="/">Pricing</a>
            </li>
          </ul>
        </nav>
        <button className="window__button btn">GET IT FREE</button>
      </div>
    );
  }
};

export default Navigation;
