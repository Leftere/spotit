import React from "react";
import Game from "./Game";
import Login from "./Login";

function Home(props) {
  let { user, setUser } = props;
  return (
    <>
      {user ? (
        <Game username={user} />
      ) : (
        <Login user={user} setUser={setUser} />
      )}
    </>
  );
}

export default Home;
