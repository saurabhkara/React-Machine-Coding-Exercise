import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [sid, setSid] = useState(0);

  const handleStart = () => {
    if (hours < 0 || minutes < 0 || seconds < 0) {
      // setSeconds(0);
      // setMinutes(0);
      // setHours(0);
      alert("Invalid input");
    } else {
      setIsStarted(true);
    }
  };

  const handleResest = () => {
    setIsStarted(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    clearInterval(sid);
  };

  const handleInput = (e) => {
    const { value, id } = e.target;
    if (id === "hours") {
      setHours(value);
    } else if (id === "minutes") {
      setMinutes(value);
    } else {
      setSeconds(value);
    }
  };

  const runTimer = (sec, min, hour, tId) => {
    if (sec > 0) {
      setSeconds((s) => s - 1);
    } else if (sec === 0 && min > 0) {
      setSeconds(59);
      setMinutes((m) => m - 1);
    } else if (min === 0) {
      setHours((h) => h - 1);
      setMinutes(59);
      setSeconds(59);
    }
    if (hour == 0 && min === 0 && sec === 0) {
      setSeconds(0);
      setMinutes(0);
      setHours(0);
      clearInterval(tId);
      alert("Timer is finished");
      return;
    }
  };

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(sid);
  };

  const handleResume = () => {
    setIsPaused(false);
    runTimer(seconds, minutes, hours, sid);
  };

  useEffect(() => {
    let sId;
    if (isStarted) {
      sId = setInterval(() => {
        runTimer(seconds, minutes, hours, sId);
      }, 1000);
      setSid(sId);
    }

    return () => {
      clearInterval(sId);
    };
  }, [isStarted, hours, minutes, seconds]);

  return (
    <div id="app">
      <h1 className="title">Count Down Timer</h1>
      {!isStarted ? (
        <div className="input-container">
          <div className="input-box">
            <input id="hours" placeholder="HH" onChange={handleInput} />
            <input id="minutes" placeholder="MM" onChange={handleInput} />
            <input id="seconds" placeholder="SS" onChange={handleInput} />
          </div>
          <button className="timer-button" onClick={handleStart}>
            Start
          </button>
        </div>
      ) : (
        <div className="show-container">
          <div className="timer-box">
            <div className="timeDigit">{hours < 10 ? `0${hours}` : hours}</div>
            <span>:</span>
            <div className="timeDigit">
              {minutes < 10 ? `0${minutes}` : minutes}
            </div>
            <span>:</span>
            <div className="timeDigit">
              {seconds < 10 ? `0${seconds}` : seconds}
            </div>
          </div>
          <div className="action-box">
            {!isPaused ? (
              <button className="timer-botton" onClick={handlePause}>
                Pause
              </button>
            ) : (
              <button className="timer-botton" onClick={handleResume}>
                Resume
              </button>
            )}
            <button className="timer-botton" onClick={handleResest}>
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
