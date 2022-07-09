import { Link } from "react-router-dom"


function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to='/Login'> Login</Link>
      <Link to="/Logout">Click to Logout</Link>
      <Link to="/Register">Sign Up!</Link>     
      <Link to="/Messages">Message</Link>
      <Link to="Create">Create</Link>
    </nav>
  );
}

export default NavBar