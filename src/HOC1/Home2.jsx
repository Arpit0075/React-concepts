import React, { useState } from "react";

function Home2({ Child1, Child2 }) {
  const [value1] = useState("State1");
  const [value2] = useState("State2");
  return (
    <div>
      Home2
      <Child1 value={value1} />
      <Child2 value={value2} />
    </div>
  );
}

export default Home2;
