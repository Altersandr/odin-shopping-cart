import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import Cart from "./Cart";
import cart from "../img/cart.png";

const Navbar = ({ cartItems, total, handleAddToCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  let length = 0;

  cartItems.forEach((item) => {
    return (length += item.quantity);
  });

  return (
    <nav className="navbar header">
      <h1 id="page-title">Fake Shop</h1>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link hvr-underline-from-center" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link hvr-underline-from-center" to="/shop">
              Shop
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link hvr-underline-from-center"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div id="cart-items">
        <span
          id="orders"
          style={{
            padding: "10px",
            backgroundColor: "gray",
            borderRadius: "50%",
          }}
        >
          {length}
        </span>
        <button className="navbar-toggler" onClick={toggle}>
          <img
            height="45px"
            src={cart}
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
        <Cart
          cartItems={cartItems}
          total={total}
          handleAddToCart={handleAddToCart}
        />
        <button onClick={toggle} className="continue-shopping">
          Continue shopping
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
