import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div id="main-body">
      <div id="home-left-text">
        <h2 id="shop-slogan">
          Our shop has only the top tier, cream of the crop products with 0
          bullshit.
        </h2>
        <button id="go-to-shopBtn" className="btn">
          <NavLink className="nav-link" to="/shop">
            <span>Go to Shop</span>
          </NavLink>
        </button>
      </div>
    </div>
  );
}
