import React from "react";
import { createCard } from "./components/Card";
import Heading from "./components/Heading";
import contacts from "./contacts";

function App() {
  return (
    <div>
      <Heading />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
