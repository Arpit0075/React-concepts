import React from "react";
import Home from "./Home";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Home2 from "./Home2";

function HOC1() {
  return (
    <div>
      {/* <Home>
        <Child1 />
        <Child2 />
      </Home> */}
      <Home2 Child1={Child1} Child2={Child2} />
    </div>
  );
}

export default HOC1;
