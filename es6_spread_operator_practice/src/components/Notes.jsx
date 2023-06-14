import React from "react";

function Notes(props) {
  return <li>{props.note}</li>;
}

function createNotes(note) {
  return <Notes note={note} />;
}

export default Notes;
export { createNotes };
