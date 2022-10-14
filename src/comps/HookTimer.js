import React, { useState, useEffect, useRef } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  const refresh = () => {
    window.location.reload();
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      Hook Timer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Hook Timer
      </button>
      <button onClick={() => setTimer(0)}>Back to zero</button>
      <button onClick={refresh}>Start Again</button>
    </div>
  );
}

export default HookTimer;
