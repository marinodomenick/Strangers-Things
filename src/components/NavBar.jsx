import React from "react";
// import ReactDOM  from "react";
import { Link } from "react-router-dom"
// import ReactDOM from "react-dom/client";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Logout">Logout</Link>
      <Link to="/Register">Sign Up!</Link>     
    </nav>
  );
}

// ReactDOM.render(
//     <NavBar />,
//     document.getElementById('app')
// )

export default NavBar