import React, { useContext } from "react";
import { useHistory } from "react-router-dom";        //react hook.
import UserContext from "../../context/UserContext";

export default function HeaderOptions() {
  const { userData, setUserData } = useContext(UserContext); 

  const history = useHistory();                      

  const register = () => history.push("/register");  
  const login = () => history.push("/login");         
  const logout = () => {                             
    setUserData({                                    
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", ""); 
  };

  return (
    <nav className="header-options">
      {false ? (
        <button onClick={logout}>Log out</button>
      ) : (                                              
        <>
          <button onClick={register}>Register</button>
          <button onClick={login}>Log in</button>
        </>
      )}
    </nav>
  );
}
