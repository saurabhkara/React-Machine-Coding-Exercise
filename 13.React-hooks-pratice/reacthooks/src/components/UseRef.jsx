import { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const ref = useRef(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    ref.current = ref.current + 1;
  });

  return (
    <div>
      <h4>UseRef</h4>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <h3>{count}</h3>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <h4>Render Count: {ref.current}</h4>
    </div>
  );
}
