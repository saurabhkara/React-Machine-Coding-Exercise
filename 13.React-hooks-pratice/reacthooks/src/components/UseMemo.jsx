import { useMemo, useState } from "react";

export default function UseMemo() {
  const [inputData, setInputData] = useState("");
  const [count, setCount] = useState(0);

  function cubeNumber(inputData) {
    console.log("Calculation done");
    return Math.pow(inputData, 3);
  }

  const result = useMemo(() => cubeNumber(inputData), [inputData]);

  return (
    <div>
      <h4>UseMemo</h4>
      <div>
        <input
          type="number"
          value={inputData}
          onChange={(e) => {
            setInputData(e.target.value);
          }}
        />
        <h3>Cube of number : {result}</h3>
      </div>

      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <h5>{count}</h5>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}
