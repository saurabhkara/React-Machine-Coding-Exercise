import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [redoList, setRedoList] = useState([]);

  const maintainData = (value) => {
    const obj = { action: value, prev: count, current: count + value };
    const copyHistory = data;
    copyHistory.unshift(obj);
    setData(copyHistory);
  };

  const handleClick = (value) => {
    const valueN = parseInt(value);
    setCount((prev) => prev + valueN);
    maintainData(valueN);
  };

  const handleUndo = () => {
    if (data.length) {
      const copyHistory = data;
      const lastAction = copyHistory.shift();
      console.log(copyHistory);
      setCount((prev) => prev + lastAction.action);
      setData(copyHistory);
    }
  };
  const handleRedo = () => {};

  return (
    <div className="container">
      <h1 className="title">Undoable Counter</h1>
      <div className="undoRedoBtn">
        <button className="btn" onClick={handleUndo}>
          Undo
        </button>
        <button className="btn" onClick={handleRedo}>
          redo
        </button>
      </div>
      <div className="main">
        {[-100, -10, -1].map((value, index) => {
          return (
            <button
              className="btn"
              key={index}
              onClick={() => handleClick(value)}
            >
              {value}
            </button>
          );
        })}
        <div className="value">{count}</div>
        {["+1", "+10", "+100"].map((value, index) => {
          return (
            <button
              className="btn"
              key={index}
              onClick={() => handleClick(value)}
            >
              {value}
            </button>
          );
        })}
      </div>
      <div className="history">
        <p className="title">Perfomed Actions</p>
        <div className="entries">
          <span>Action</span>
          <span>Previous</span>
          <span>Current</span>
        </div>
        {data.reverse().map((item, index) => {
          return (
            <div key={index} className="entries">
              <span>{item.action}</span>
              <span>{item.prev}</span>
              <span>{item.current}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
