import "./styles/App.css";
import body from "./img/body.jpg";
import OffcanvasExample from "./components/Navbar";
import { Footer } from "./components/Footer";

import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  // const displayProducts = products.map((item) => {
  //   return <p>{item.title}</p>;
  // });

  return (
    <div className="App">
      <OffcanvasExample />
      <h2 id="shop-slogan" style={{ fontSize: "55px" }}>
        Our shop has only the top tier, cream of the crop products with 0
        bullshit.
      </h2>
      <button id="go-to-shopBtn" className="btn">
        <span>Go To Shop</span>
      </button>
      <div>
        <img id="main-body" src={body} width="100%"></img>
      </div>

      <Footer />
    </div>
  );
}

export default App;
