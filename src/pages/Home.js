import React from "react";
import body from "../img/body.jpg";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2 id="shop-slogan">
        Our shop has only the top tier, cream of the crop products with 0
        bullshit.
      </h2>
      <button id="go-to-shopBtn" className="btn">
        <NavLink className="nav-link" to="/shop">
          <span>Go to Shop</span>
        </NavLink>
      </button>
      <div>
        <img id="main-body" src={body} width="100%" alt="home-pic"></img>
      </div>
    </div>
  );
}
