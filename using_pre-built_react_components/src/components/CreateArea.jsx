import React, { useState } from "react";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  const [isSelected, setIsSelected] = useState(false);

  function handleClick() {
    setIsSelected(true);
  }

  return (
    <div>
      <form className="create-note">
        {isSelected && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            autoFocus={true}
          />
        )}

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          onClick={handleClick}
          placeholder="Take a note..."
          rows={isSelected ? "3" : "1"}
        />
        <Zoom in={isSelected}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
