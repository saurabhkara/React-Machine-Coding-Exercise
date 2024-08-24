import { useEffect, useState } from "react";
export default function UseState() {
  const [name, setName] = useState("Saurabh");
  const [count, setCount] = useState(0);
  const handleUpdateName = () => {
    setName("Saurabh Kumar");
  };

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    console.log("State updated");
  }, [count]);
  return (
    <div className="useState">
      <h1>useState Hook </h1>
      <h6>{name}</h6>
      <button onClick={handleUpdateName}>Update Name</button>
      <button onClick={increaseCount}>Increase counter {count}</button>
    </div>
  );
}
