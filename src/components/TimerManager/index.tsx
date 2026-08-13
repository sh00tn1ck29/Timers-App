import moment from 'moment';
import { FormEvent, useEffect, useState } from 'react';
import './index.scss';

interface Timer {
  id: string;
  name: string;
  seconds: number;
  isRunning: boolean;
}

export const TimerManager = () => {
  const [timerName, setTimerName] = useState<string>('');
  const [timers, setTimers] = useState<Timer[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prevTimers) =>
        prevTimers.map((timer) =>
          timer.isRunning ? { ...timer, seconds: timer.seconds + 1 } : timer,
        ),
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCreateTimer = (e: FormEvent) => {
    e.preventDefault();
    if (!timerName.trim()) return;

    const newTimer: Timer = {
      id: Date.now().toString(),
      name: timerName,
      seconds: 0,
      isRunning: true,
    };

    setTimers((prev) => [...prev, newTimer]);
    setTimerName('');
  };

  const toggleTimer = (id: string) => {
    setTimers((prev) =>
      prev.map((timer) =>
        timer.id === id ? { ...timer, isRunning: !timer.isRunning } : timer,
      ),
    );
  };

  const deleteTimer = (id: string) => {
    setTimers((prev) => prev.filter((timer) => timer.id !== id));
  };

  const formatTime = (seconds: number) => {
    return moment.utc(seconds * 1000).format('HH:mm:ss');
  };

  return (
    <div className="create">
      <form className="create__form" onSubmit={handleCreateTimer}>
        <input
          type="text"
          className="create__input"
          placeholder="Timer Name"
          value={timerName}
          onChange={(e) => setTimerName(e.target.value)}
        />
        <button type="submit" className="create__button btn">
          Create Timer
        </button>
      </form>

      <hr className="create__line" />

      <div className="create__list">
        {timers.map((timer) => (
          <div key={timer.id} className="timer-item">
            <span className="timer-item__name">{timer.name}</span>
            <span className="timer-item__time">
              {formatTime(timer.seconds)}
            </span>

            <button
              className="timer-item__btn timer-item__btn--toggle"
              onClick={() => toggleTimer(timer.id)}
            >
              {timer.isRunning ? '⏸' : '▶'}
            </button>

            <button
              className="timer-item__btn timer-item__btn--delete"
              onClick={() => deleteTimer(timer.id)}
            >
              🗑
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimerManager;
