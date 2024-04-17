import React, { useState, useEffect } from "react";

function StopWatch() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isClockTicking, setIsClockTicking] = useState(true);

  useEffect(() => {
    let interval;
    if (!isClockTicking) {
      clearInterval(interval);
    }
    if (isClockTicking) {
      interval = setInterval(() => {
        if (second == 59) {
          setSecond(0);
          setMinute((prev) => prev + 1);
        } else setSecond((prev) => prev + 1);

        if (minute == 59 && second == 59) {
          setSecond(0);
          setMinute(0);
          setHour((prev) => prev + 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isClockTicking, second, minute]);

  const handleStopWatch = () => {
    setIsClockTicking((prev) => !prev);
  };

  return (
    <div>
      StopWatch
      <div>
        {hour}: {minute}: {second}
      </div>
      <button onClick={handleStopWatch}>Start/Stop</button>
      <button
        onClick={() => {
          setMinute(0);
          setSecond(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default StopWatch;
