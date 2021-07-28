import React, { useState } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Menu from "./components/Menu";
import Game from "./components/Game";
import Rules from "./components/Rules";

function App() {
  let [user, setUser] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <Menu user={user} setUser={setUser} />
        <Switch>
          <Route exact path="/">
            <Home user={user} setUser={setUser} />
          </Route>
          <Route path="/rules">
            <Rules />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
