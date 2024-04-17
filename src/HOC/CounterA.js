import React from "react";
import HOC from "./HOC";

function CounterA({ count, increment, name }) {
  return (
    <div>
      <h1>Counter-{name}</h1>
      <button onClick={increment}>Increment</button>
      {count}
    </div>
  );
}

export default HOC(CounterA);
