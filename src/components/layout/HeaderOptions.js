import React, { useContext } from "react";
import { useHistory } from "react-router-dom";        //react hook.
import UserContext from "../../context/UserContext";

export default function HeaderOptions() {
  return (
    <nav className="header-options">
      {false ? (
        <button onClick={null}>Log out</button>
      ) : (                                              
        <>
          <button onClick={null}>Register</button>
          <button onClick={null}>Log in</button>
        </>
      )}
    </nav>
  );
}
