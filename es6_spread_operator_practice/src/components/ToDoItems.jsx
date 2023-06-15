import React, { useState } from "react";

function ToDoItems(props) {
  const [isDone, setisDone] = useState(false);

  function handleMouseOver() {
    setisDone(true);
  }
  function handleMouseOut() {
    setisDone(false);
  }

  function handleClick() {
    props.Onchecked(props.id);
  }

  return (
    <li
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
      style={{ textDecoration: isDone && "line-through" }}
    >
      {props.item}
    </li>
  );
}

function createToDoItems(item, index, deleteItem) {
  return (
    <ToDoItems key={index} id={index} item={item} Onchecked={deleteItem} />
  );
}

export default ToDoItems;
export { createToDoItems };
