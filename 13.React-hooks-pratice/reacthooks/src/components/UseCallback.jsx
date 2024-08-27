import Header from "./Header";
import { useCallback, useState } from "react";

export default function UseCallback() {
  const [count, setCount] = useState(0);

  const newFunc = useCallback(() => {}, []);
  return (
    <div>
      <h3> UseCallback</h3>
      <Header newFunc={newFunc} />
      <h4>{count}</h4>
      <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
    </div>
  );
}
