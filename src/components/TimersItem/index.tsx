import type { Timer } from '../TimerManager';
import './index.scss';

interface TimersItemProps {
  timer: Timer;
  toggleTimer: (id: string) => void;
  deleteTimer: (id: string) => void;
  formatTime: (seconds: number) => string;
}

export const TimersItem = ({
  timer,
  toggleTimer,
  deleteTimer,
  formatTime,
}: TimersItemProps) => {
  return (
    <div className="timer">
      <span className="timer__name">{timer.name}</span>
      {timer.isRunning ? (
        <span className="timer__time">{formatTime(timer.seconds)}</span>
      ) : (
        <span className="timer__time timer__time--toggle">
          {formatTime(timer.seconds)}
        </span>
      )}

      <div className="timer__buttons">
        {timer.isRunning ? (
          <button
            className="timer__btn timer__btn--toggle"
            onClick={() => toggleTimer(timer.id)}
          ></button>
        ) : (
          <button
            className="timer__btn timer__btn--pause"
            onClick={() => toggleTimer(timer.id)}
          >
            <img className="timer__run" src="./images/run.svg" />
          </button>
        )}

        <button
          className="timer__btn timer__btn--delete"
          onClick={() => deleteTimer(timer.id)}
        ></button>
      </div>
    </div>
  );
};

export default TimersItem;
