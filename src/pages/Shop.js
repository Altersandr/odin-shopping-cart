import React, { useEffect, useState } from "react";

export default function Shop({
  setCartItems,
  cartItems,
  setTotal,
  total,
  handleAddToCart,
}) {
  // const [cart, setCart] = useState([]);

  const [products, setProducts] = useState([]);

  // const handleAddToCart = (item) => {
  //   // console.log(car);

  //   const itemIndex = cartItems.findIndex(
  //     (cartItem) => cartItem.id === item.id
  //   );
  //   if (itemIndex !== -1) {
  //     const updatedCart = [...cartItems];
  //     updatedCart[itemIndex].quantity++;
  //     setCartItems(updatedCart);
  //   } else {
  //     const newItem = { ...item, quantity: 1 };
  //     setCartItems([...cartItems, newItem]);
  //   }
  //   setTotal(total + item.price * item.quantity);

  //   console.log(cartItems);
  // };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const displayProducts = products.map((item) => {
    return (
      <div
        className="shop-item"
        key={item.id}
        style={{ width: "250px", height: "350px" }}
      >
        <h3>{item.title}</h3>
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "150px", height: "150px" }}
        ></img>
        <div className="add-btn">
          <span>{item.price} €</span>
          <button
            onClick={() => {
              handleAddToCart({ ...item, quantity: 1 });
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
  });

  return <div id="shop-items">{displayProducts}</div>;
}
