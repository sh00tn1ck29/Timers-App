import './index.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <span className="footer__logo">Timers App</span>
        <div className="footer__terms">
          <span className="footer__created">
            Created with{' '}
            <span className="footer__heart">
              <img src="./images/HeartIcon.svg" />
            </span>{' '}
            by
            <b className="footer__strong"> Sergey Azovskiy</b>
          </span>
          <span>© Timers App, 2025</span>
        </div>
        <ul className="footer__icons">
          <li className="footer__icon">
            <a className="footer__link footer__twitter" href="#">
              <img className="footer__image " src="/images/TwitterIcon.svg" />
            </a>
          </li>
          <li className="footer__icon">
            <a className="footer__link footer__facebook" href="#">
              <img className="footer__image  " src="/images/FacebookIcon.svg" />
            </a>
          </li>
          <li className="footer__icon">
            <a className="footer__link footer__instagram" href="#">
              <img className="footer__image " src="/images/InstagramIcon.svg" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
