import React from "react";
import Header from "./components/Header";
import Note, { createNotes } from "./components/Note";
import Footer from "./components/Footer";
import notes from "./notes";

function App() {
  return (
    <div>
      <Header />
      {/* {notes.map(createNotes)} */}
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
