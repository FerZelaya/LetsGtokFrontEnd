import React, { useState } from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <nav className="NavBarItems">
      <div className="navbar-logo-C">
        <img
          src={logo}
          alt=""
          width="50"
          height="50"
          style={{ borderRadius: 50 }}
        ></img>
        <h1 className="navbar-title">Lets Gtok</h1>
      </div>
      <div className="burgerMenu" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars "}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li>
          <a className="nav-links" href="#section1">About</a>
        </li>
        <li>
          <a className="nav-links" href="#section2">Blogs</a>
        </li>
        <li>
          <a className="nav-links" href="#section3">Careers</a>
        </li>
        <li>
          <a className="nav-links" href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
