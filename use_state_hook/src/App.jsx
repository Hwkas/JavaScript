import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase_count() {
    setCount(count + 1);
  }

  function decrease_count() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase_count}>+</button>
      <button onClick={decrease_count}>-</button>
    </div>
  );
}

export default App;
