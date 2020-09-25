import React, {useContext, useState} from "react";
import UserContext from "../../context/UserContext";
import FormInput from "./Form";

export default function Home() {
  const { userData } = useContext(UserContext);
  const [showForm, setShowForm] = useState(false);

  const handler = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  };

  return (
    <div className="page">
      {!userData.token ? (
        <div>
        <h1>Welcome Ethanee, click log out to return to home page</h1>
        <p>Create create customer below to onboard a customer!</p>
        <button onClick={handler}> Create a Customer</button>
          {showForm ? <FormInput/> : null}
        </div>
      ) : (                                     
        <>
          <h2 >DBS CS Portal</h2>       
        </>
      )}
    </div>
  );
}
