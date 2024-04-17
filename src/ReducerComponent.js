import React, { useReducer } from "react";

function ReducerComponent() {
  let initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + action.by };
      case "decrement":
        return { ...state, count: state.count - action.by };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Reducer comp</h1>
      <button onClick={() => dispatch({ type: "increment", by: 2 })}>+</button>
      {state.count}
      <button onClick={() => dispatch({ type: "decrement", by: 2 })}>-</button>
    </div>
  );
}

export default ReducerComponent;
