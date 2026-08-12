import './index.scss';

export const TimerManager = () => {
  return (
    <div className="create">
      <form className="create__form">
        <input type="text" className="create__input" placeholder="Timer Name" />
        <button className="create__button btn">Create Timer</button>
      </form>
      <hr className="create__line" />
    </div>
  );
};

export default TimerManager;
