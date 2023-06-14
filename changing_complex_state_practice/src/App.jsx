import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
      //   if (name === "fName") {
      //     return {
      //       fName: value,
      //       lName: prevValue.lName,
      //       email: prevValue.email,
      //     };
      //   } else if (name === "lName") {
      //     return {
      //       fName: prevValue.lName,
      //       lName: value,
      //       email: prevValue.email,
      //     };
      //   } else if (name === "email") {
      //     return {
      //       fName: prevValue.lName,
      //       lName: prevValue.lName,
      //       email: value,
      //     };
      //   }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
