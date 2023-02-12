import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar header">
      <h1 id="page-title">Shop Mockup</h1>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Shop
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <button className="navbar-toggler" onClick={toggle}>
        <img
          height="45px"
          src="https://cdn-icons-png.flaticon.com/512/262/262611.png"
          className="navbar-toggler-icon"
        />
      </button>
      <div
        className={`offcanvas-collapse ${isOpen ? "show" : ""}`}
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div>Shop contents</div>
        <button onClick={toggle}>Close</button>
      </div>
    </nav>
  );
};

export default Navbar;
