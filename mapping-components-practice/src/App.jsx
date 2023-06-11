import React from "react";
import { createEmojiCard } from "./components/EmojiCard";
import emojipedia from "./emojipedia";
import Heading from "./components/Heading";

function App() {
  return (
    <div>
      <Heading />
      <dl className="dictionary">{emojipedia.map(createEmojiCard)}</dl>
    </div>
  );
}

export default App;
