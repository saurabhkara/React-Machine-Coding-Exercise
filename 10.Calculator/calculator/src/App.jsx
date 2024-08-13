import { useState } from "react";
import "./App.css";

function App() {
  const arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "=",
    ".",
    "c",
  ];

  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    try {
      //produce result
      const ans = eval(value);
      setValue(ans);
    } catch (e) {
      alert("Invalid result");
    }
  };
  const handleOnClick = (e) => {
    const id = e.target.id;
    if (id === "c") {
      setValue("");
    } else if (id === "=") {
      handleSubmit();
    } else {
      setValue((prev) => prev + id);
    }
  };

  return (
    <div className="app">
      <h2>Calculator</h2>
      <div className="calculatorContainer">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleOnChange} value={value} />
        </form>
        <div className="container" onClick={handleOnClick}>
          {arr.map((symbol, index) => {
            return (
              <button key={index} id={symbol} className="cell">
                {symbol}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
