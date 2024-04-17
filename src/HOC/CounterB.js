import React from "react";
import HOC from "./HOC";

function CounterB({ name, count, increment }) {
  return (
    <div>
      <h1>Counter-{name}</h1>
      <button onMouseOver={increment}>Increment</button>
      {count}
    </div>
  );
}

export default HOC(CounterB);
