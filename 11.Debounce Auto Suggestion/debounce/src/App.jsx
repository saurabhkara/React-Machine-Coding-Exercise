import "./App.css";
import { useEffect, useState } from "react";
import debounceQuery from "./utils";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const initApiCall = async () => {
    let url = `https://api.frontendeval.com/fake/food/${input}`;
    const result = await debounceQuery(url);
    setList(result);
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
            return <div key={index}>{item}</div>;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
