import "./styles/App.css";
import OffcanvasExample from "./components/Navbar";

import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const displayProducts = products.map((item) => {
    return <p>{item.title}</p>;
  });

  return <div className="App">{displayProducts && <OffcanvasExample />}</div>;
}

export default App;
