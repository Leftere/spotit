import { Link } from "react-router-dom";
import React from "react";

export default function Menu(props) {
  let { user, setUser } = props;
  return (
    <ul className="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/rules">Rules</Link>
      </li>
      {user ? (
        <li>
          <Link
            onClick={function () {
              setUser(null);
            }}
          >
            Logout
          </Link>
        </li>
      ) : null}
    </ul>
  );
}
