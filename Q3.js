import React, { useState } from "react";

function Q3() {
  const [onButton, setOnButton] = useState(true);

  let bacgroundcolor = () => {
    setOnButton(!onButton);
  };

  return (
    <div>
      <button
        onClick={bacgroundcolor}
        style={{
          padding: "10px ",
          backgroundColor: onButton ? "red" : "green",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Button : {onButton ? "OFF" : "ON"} State
      </button>
    </div>
  );
}

export default Q3;
