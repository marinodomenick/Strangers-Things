import React from "react";
import { Link } from "react-router-dom"


function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to='/Login'> Login</Link>
      <Link to="/Logout">Logout</Link>
      <Link to="/Register">Sign Up!</Link>     
      {/* <Link to="/Posts">Posts</Link> */}
      <Link to="Create">Create</Link>
    </nav>
  );
}

export default NavBar