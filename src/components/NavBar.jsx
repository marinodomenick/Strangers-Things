import { Link } from "react-router-dom"


function NavBar() {
  return (
    <nav className="Navi">
      <Link to="/">Home</Link>
      <Link to='/Login'> Login</Link>
      <Link to="/Register">Sign Up!</Link>     
      <Link to="/Messages">Your Messages</Link>
      <Link to="Create">Create</Link>
      <Link className="Logout" to="/Logout">Click to Logout</Link>
    </nav>
  );
}

export default NavBar