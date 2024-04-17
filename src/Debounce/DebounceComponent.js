import React from "react";
import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";

function DebounceComponent() {
  const [value, setValue] = useState("");
  const debouncedVal = useDebounce(value);

  //debounce function to delay change in input
  const debounce = (cb, d = 1000) => {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, d);
    };
  };

  // const handleChange = debounce((e) => {
  //   //console.log(e.target.value);
  // }, 1000);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log(debouncedVal);
    //fetch data once user has typed something
  }, [debouncedVal]);

  return (
    <div>
      <h1>DebounceComponent </h1>
      <input value={value} onChange={handleChange} />
    </div>
  );
}

export default DebounceComponent;
