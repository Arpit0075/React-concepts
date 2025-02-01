import React, { useState } from "react";
import Home from "./Home";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Home2 from "./Home2";

function HOC1() {
  const [value1] = useState("value1");
  const [value2] = useState("value2");
  return (
    <div>
      <Home>
        <Child1 value={value1} />
        <Child2 value={value2} />
      </Home>
      {/* <Home2 Child1={Child1} Child2={Child2} /> */}
    </div>
  );
}

export default HOC1;
