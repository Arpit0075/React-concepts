import React, { useCallback, useState } from "react";
import Input from "./Input";

//demonstrating use of usecallback and Memo
function Main() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(10);
  const [input, setInput] = useState("");

  const handleChange = useCallback(
    (e) => {
      setInput(e.target.value);
    },
    [input]
  );

  //   const handleChange = (e) => {
  //     setInput(e.target.value);
  //   };

  return (
    <div
      style={{
        margin: "5rem auto",
        width: `calc(100vh - 2rem)`,
      }}
    >
      {counter}
      <br />
      {input}
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        +
      </button>
      <hr />
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        Change Value By 1
      </button>
      <Input handleChange={handleChange} value={value} input={input} />
    </div>
  );
}

export default Main;
