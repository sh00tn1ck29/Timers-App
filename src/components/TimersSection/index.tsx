import TimerManager from '../TimerManager';
import './index.scss';

export const TimersSection = () => {
  return (
    <>
      <section className="timers">
        <div className="timers__text">
          <h3 className="timers__headline">
            <b className="timers__strong">Why</b> do we use it?
          </h3>
          <p className="timers__description">
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
