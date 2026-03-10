import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Navbar;