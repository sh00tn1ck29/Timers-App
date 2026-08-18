import moment from 'moment';
import { FormEvent, useEffect, useState } from 'react';
import TimersItem from '../TimersItem';
import './index.scss';

export interface Timer {
  id: string;
  name: string;
  seconds: number;
  isRunning: boolean;
}

export const TimerManager = () => {
  const [timerName, setTimerName] = useState<string>('');
  const [timers, setTimers] = useState<Timer[]>(() => {
    const savedTimers = localStorage.getItem('timers');
    return savedTimers ? JSON.parse(savedTimers) : [];
  });

  useEffect(() => {
    localStorage.setItem('timers', JSON.stringify(timers));
  }, [timers]);

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
    const creationTime = moment().format('HH:mm');
    const defaultName = `From ${creationTime}`;

    const newTimer: Timer = {
      id: Date.now().toString(),
      name: timerName || defaultName,
      seconds: 0,
      isRunning: true,
    };

    setTimers((prev) => [newTimer, ...prev]);
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
        {timers.length === 0 ? (
          <div className="create__block"></div>
        ) : (
          timers.map((timer) => (
            <TimersItem
              timer={timer}
              toggleTimer={toggleTimer}
              deleteTimer={deleteTimer}
              formatTime={formatTime}
              key={timer.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TimerManager;
