import React from "react";
import { Redirect } from "react-router-dom";

function Login(props) {
  let { user, setUser } = props;

  function submitForm(evt) {
    evt.preventDefault();
    let username = document.getElementById("username").value;
    if (username) {
      setUser(username);
    }
  }
  console.log("user:", user);
  return user ? (
    <Redirect to="/" />
  ) : (
    <div>
      <div>Login to start the game.</div>
      <form onSubmit={submitForm}>
        <input label="username" id="username" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
