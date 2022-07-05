import React from "react";
// import ReactDOM  from "react";
import { NavLink, Link } from "react-router-dom"
// import ReactDOM from "react-dom/client";
// import Register from "./Register";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <NavLink to='/Login'> Login</NavLink> {/* testing NavLink instead of Nav for routes, still need to setup routes for NavBar*/}
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