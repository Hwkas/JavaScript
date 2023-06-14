import React, { useState } from "react";

function App() {
  const [FullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {FullName.fName} {FullName.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={FullName.lName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={FullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
