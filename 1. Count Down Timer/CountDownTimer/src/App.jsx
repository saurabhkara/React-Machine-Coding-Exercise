import "./App.css";
import { useState } from "react";

function App() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div id="app">
      <h1 className="title">Count Down Timer</h1>
      <div className="input-container">
        <div className="input-box">
          <input id="hours" placeholder="HH" />
          <input id="minutes" placeholder="MM" />
          <input id="seconds" placeholder="SS" />
        </div>
        <button className="timer-button">Start</button>
      </div>
      <div className="show-container">
        <div className="timer-box">
          <div>10</div>
          <span>:</span>
          <div>11</div>
          <span>:</span>
          <div>50</div>
        </div>
        <div className="action-box">
          <button className="timer-botton">Pause</button>
          <button className="timer-botton">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
