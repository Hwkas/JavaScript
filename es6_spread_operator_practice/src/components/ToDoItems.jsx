import React, { useState } from "react";

function ToDoItems(props) {
  const [isDone, setisDone] = useState(false);

  function handleClick() {
    setisDone((prevStyle) => {
      return !prevStyle;
    });
  }
  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: isDone && "line-through" }}
    >
      {props.item}
    </li>
  );
}

function createToDoItems(item, index) {
  return <ToDoItems key={index} item={item} />;
}

export default ToDoItems;
export { createToDoItems };
