import React, { useRef, useEffect } from "react";

function Focusinput() {
  const inputRef = useRef(null);

  const ClickHandler = () => {
    inputRef.current.placeholder = "youtube";
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Facebook" />
      <button onClick={ClickHandler}>Click </button>;
    </div>
  );
}

export default Focusinput;
