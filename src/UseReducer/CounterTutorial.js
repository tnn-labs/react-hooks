import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: false };
    case "DECREMENT":
      return { count: state.count - 1, showText: false };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const CounterTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <>
      <h1>{state.count}</h1>

      <button onClick={() => dispatch({ type: "toggleShowText" })}>
        toggleShowText
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        (+) Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        (-) Decrement
      </button>

      {state.showText && <p>This is a text</p>}
    </>
  );
};

export default CounterTutorial;
