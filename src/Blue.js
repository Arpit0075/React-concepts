import React from "react";
import { useMovieContext } from "./MovieProvider";

function Blue() {
  //use custom hook to get movies context value
  let res = useMovieContext();
  console.log(res);

  //dynamic import - it will be imported only when the button is clicked
  const calc = () => {
    import("./sum").then((module) => {
      alert(module.sum(2, 2));
    });
  };
  //   console.log(movies);

  // DOM - if any element is updated by js ( ex using getElementById().innerHTML), the entire component (ui) needs to be rerendered inorder to refelct the changes
  // Vitual DOM - if any element is updated by react(ex using useState), only that element is rerendered.
  // React compares changes in virtual Dom and rerenders only the element which is updated.

  return (
    <div>
      Blue
      <button onClick={calc}>2+2</button>
    </div>
  );
}

export default Blue;
