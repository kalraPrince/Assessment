import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/BookStore" className="nav-logo">
            BookStore
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/BookStore"
                activeClassName="active"
                className="nav-links"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/price"
                activeClassName="active"
                className="nav-links"
                // onClick={handleClick}
              >
               Price
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/rating"
                activeClassName="active"
                className="nav-links"
                
              >
                Rating
              </NavLink>
            </li>
          
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;