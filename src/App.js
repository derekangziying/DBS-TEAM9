import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Header from "./components/layout/Header";
import UserContext from "./context/UserContext";

import "./index.css";

export default function App() {
  const [userData, setUserData] = useState({                  
    token: undefined,       //store the JWT Token
    user: undefined        //store the user's data
  });

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>  
          <Header/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </div>
        </UserContext.Provider> 
      </BrowserRouter>
    </>
  );
}
