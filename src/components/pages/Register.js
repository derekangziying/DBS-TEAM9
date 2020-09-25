import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../error/ErrorNotice";

export default function Register() {
  const [password, setPassword] = useState();           
  const [passwordCheck, setPasswordCheck] = useState(); 
  const [userName, setUserName] = useState();     
  const [error, setError] = useState();                 

  const { setUserData } = useContext(UserContext);       
  const history = useHistory();

  const submit = async (e) => {                   
    e.preventDefault();

    try {                                               
      const newUser = { userName, password, passwordCheck }; // Waiting on backend register format still 
      await Axios.post("url/register", newUser);    // waiting on backend login & register url
      const loginRes = await Axios.post("url/login", {  
        userName,
        password,
      });
      setUserData({                                    
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token); 
      history.push("/");                                       
    } catch (err) {                                           
      err.response.data.msg && setError(err.response.data.msg); 
    }
  };

  return (
    <div className="page">
      <h2>Register</h2>
      {error && (                                            
        <ErrorNotice message={error} clearError={() => setError(undefined)} />  
      )}
      <form className="form" onSubmit={submit}>

        <label htmlFor="register-user-name">User Name</label>
        <input
          id="register-user-name"
          type="text"
          onChange={(e) => setUserName(e.target.value)}
        />

        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}       
        />
        <input
          type="password"
          placeholder="Verify password here"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />

        <input type="submit" value="Register" />
      </form>
    </div>
  );
}