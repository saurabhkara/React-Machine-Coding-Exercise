import { useReducer } from "react";

export default function UseReducer() {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return { count: state.count + 1 };
      case "decrease":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Use Reducer</h1>
      <div>
        <button onClick={() => dispatch({ type: "increase" })}>+</button>
        <span>{state.count}</span>
        <button onClick={() => dispatch({ type: "decrease" })}>-</button>
      </div>
    </div>
  );
}
