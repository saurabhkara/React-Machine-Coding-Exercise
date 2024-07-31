import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <button>{"<"}</button>
      <img src="" alt="image not found" />
      <button>{">"}</button>
    </div>
  );
}

export default App;
