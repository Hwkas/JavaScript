import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

function createNote(note, index, deleteNote) {
  return (
    <Note
      key={index}
      id={index}
      title={note.title}
      content={note.content}
      onDelete={deleteNote}
    />
  );
}

export default Note;
export { createNote };
