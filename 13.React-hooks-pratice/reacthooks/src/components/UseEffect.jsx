import { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let sid = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 5000);
    return () => {
      clearTimeout(sid);
    };
  }, []);

  return (
    <div className="useState">
      <h1>UseEffect</h1>
      <h4>Count will updated {count}</h4>
    </div>
  );
}
