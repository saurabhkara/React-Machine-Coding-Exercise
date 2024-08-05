import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const initApiCall = async () => {
    let url = `https://api.frontendeval.com/fake/food/${input}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setList(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    if (input) {
      initApiCall();
    }
  }, [input]);

  console.log(input);
  return (
    <div className="app">
      <h1>Debounce API call</h1>
      <input type="text" onChange={handleOnChange} value={input} />
      {list && list.length > 0 && (
        <div className="list">
          {list.map((item, index) => {
            console.log(item);
            return <div key={index}>{item}</div>;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
