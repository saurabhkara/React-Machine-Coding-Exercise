import { useLayoutEffect, useEffect } from "react";

export default function UseLayoutEffect() {
  useEffect(() => {
    console.log("Use Effect console");
  });

  useLayoutEffect(() => {
    console.log("Use Layout effect console");
  });

  return (
    <div>
      UseLayoutEffect
      {Array(4000)
        .fill("")
        .map((item, index) => {
          return <li key={index}>{Math.random()}</li>;
        })}
    </div>
  );
}
