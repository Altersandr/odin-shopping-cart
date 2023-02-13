import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import Cart from "./Cart";

const Navbar = ({ cartItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar header">
      <h1 id="page-title">Shop Mockup</h1>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/shop">
              Shop
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div id="cart-items">
        <span id="orders">0</span>
        <button className="navbar-toggler" onClick={toggle}>
          <img
            height="45px"
            src="https://cdn-icons-png.flaticon.com/512/262/262611.png"
            className="navbar-toggler-icon"
            alt="cart"
          />
        </button>
      </div>
      <div
        className={`offcanvas-collapse ${isOpen ? "show" : ""}`}
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <Cart cartItems={cartItems} />
        <button onClick={toggle} className="continue-shopping">
          Continue shopping
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
