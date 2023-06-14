import React, { useState } from "react";
import { createNotes } from "./components/Notes";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setitems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleClick() {
    setitems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={inputText} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{items.map(createNotes)}</ul>
      </div>
    </div>
  );
}

export default App;