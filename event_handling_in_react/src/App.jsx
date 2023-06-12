import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");

  function handleClick() {
    setHeadingText("Submitted");
  }

  const [btn_color, setBtnColor] = useState("");
  function handleMouseOver() {
    setBtnColor("black");
  }

  function handleMouseOut() {
    setBtnColor("white");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: btn_color }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
