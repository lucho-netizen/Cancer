import React from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  // const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href=('/')
  };

  return <button onClick={handleLogout} style={{backgroundColor : "blue"}}>Logout</button>;
};

export default Logout;
