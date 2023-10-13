import { NavLink } from "react-router-dom";
import "./Header.css";


function Header() {
  return (
    <>
      <div className="header">
        <h2><NavLink to="/">Logo</NavLink></h2>
        <div className="list">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Services">Services</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        
        </div>
      </div>




    </>
  );
}

export default Header;
