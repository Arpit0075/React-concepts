import React, { useRef, useEffect, useContext } from "react";
import { MovieContext } from "./MovieProvider";

// useRef hook to get foucs on the input element

function UseRef() {
  const inputElm = useRef("");

  //   let movies = useContext(MovieContext);
  //   console.log(movies);

  useEffect(() => {
    inputElm.current.focus();
  }, []);

  return (
    <div>
      <h1>Useref component</h1>
      <input ref={inputElm} type="string"></input>
    </div>
  );
}

export default UseRef;
