import TimerManager from '../TimerManager';
import './index.scss';

export const TimersSection = () => {
  return (
    <>
      <section className="timer">
        <div className="timer__text">
          <h3 className="timer__headline">
            <strong className="timer__strong">Why</strong> do we use it?
          </h3>
          <p className="timer__description">
            This sounded nonsense to Alice, so she said nothing, but set off at
            once toward the Red Queen. To her surprise, she lost sight of her in
            a moment.
          </p>
        </div>
        <TimerManager />
      </section>
    </>
  );
};

export default TimersSection;
