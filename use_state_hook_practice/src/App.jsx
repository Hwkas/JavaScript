import React, { useState } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  function getCurrTime() {
    setTime(new Date().toLocaleTimeString());
  }

  setInterval(getCurrTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getCurrTime}>Get Time</button>
    </div>
  );
}

export default App;
