import React, { useMemo, useState } from "react";

function UseMemoComponent() {
  const [count, setCount] = useState(0);
  const [isClick, setIsclick] = useState(false);

  const checkNum = () => {
    for (let i = 0; i < 999999999; i++) {}
    return count;
  };

  // const getNum = useMemo(() => {
  //   return checkNum();
  // }, [count]);

  const getNum = useMemo(checkNum, [count]);

  //const getNum = checkNum();

  return (
    <div>
      <h1>useMemo Comp</h1>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      {getNum}
      <button
        onClick={() => {
          setIsclick(!isClick);
        }}
      >
        Set working
      </button>
      {isClick ? "Not working" : "working"}
    </div>
  );
}

export default UseMemoComponent;
