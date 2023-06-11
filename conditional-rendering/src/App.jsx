import React from "react";
import LogInForm from "./components/LogIn";

var isLoggedIn = false;

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello!</h1> : <LogInForm />}
    </div>
  );
}

export default App;
