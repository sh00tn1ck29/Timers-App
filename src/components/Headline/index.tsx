import './indesx.scss';

export const Headline = () => {
  return (
    <section className="headline">
      <div className="headline__container">
        <img className="headline__logo" src="./images/AppIcon.svg" />
        <h3 className="headline__text">
          <strong className="headline__strong">Timers App.</strong> Best landing
          page for web and mobile apps
        </h3>
        <div className="headline__buttons">
          <button className="headline__download btn">Download Now</button>
          <button className="headline__watch btn">Watch Video</button>
        </div>
      </div>
      <img className="headline__decoration" src="./images/Tablet.png" />
    </section>
  );
};

export default Headline;
