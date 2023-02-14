import "./styles/App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddToCart = (item, add = true) => {
    if (item.quantity === 0) return;

    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (itemIndex !== -1) {
      const updatedCart = [...cartItems];
      if (add) updatedCart[itemIndex].quantity++;
      else updatedCart[itemIndex].quantity--;
      setCartItems(updatedCart);
    } else {
      const newItem = { ...item, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
    setTotal(total + item.price * item.quantity);
  };

  return (
    <div className="App">
      <Navbar
        cartItems={cartItems}
        total={total}
        handleAddToCart={handleAddToCart}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              setCartItems={setCartItems}
              cartItems={cartItems}
              setTotal={setTotal}
              total={total}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
