import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="title">Undoable Counter</h1>
      <div className="undoRedoBtn">
        <button>Undo</button>
        <button>redo</button>
      </div>
      <div className="main">
        {[-100, -10, -1].map((value, index) => {
          return <button key={index}>{value}</button>;
        })}
        <div className="value">0</div>
        {["+1", "+10", "+100"].map((value, index) => {
          return <button key={index}>{value}</button>;
        })}
      </div>
      <div className="history">History coming...</div>
    </div>
  );
}

export default App;
