import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

export default function Home() {
  const { userData } = useContext(UserContext); 

  return (
    <div className="page">
      {userData.user ? (                      
        <h1>Welcome {userData.user.displayName}, click log out to return to home page</h1>
      ) : (                                     
        <>
          <h2 >DBS CS Portal</h2>       
        </>
      )}
    </div>
  );
}
