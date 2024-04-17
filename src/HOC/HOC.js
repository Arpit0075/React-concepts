import React, { useState } from "react";

const HOC = (WrappedComponent) => {
  function HOCounterC(props) {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    return (
      <div>
        <WrappedComponent count={count} increment={increment} {...props} />
      </div>
    );
  }
  return HOCounterC;
};
export default HOC;
