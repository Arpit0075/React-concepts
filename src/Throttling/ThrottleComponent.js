import React, { useEffect, useState } from "react";
import { useThrottle } from "./useThrottle";

function ThrottleComponent() {
  const [value, setValue] = useState("");
  const throttledValue = useThrottle(value);

  useEffect(
    () => console.log(`throttledValue changed: ${throttledValue}`),
    [throttledValue]
  );

  function onChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      Input: <input value={value} onChange={onChange} />
      <p>Throttled value: {throttledValue}</p>
    </div>
  );
}
export default ThrottleComponent;
