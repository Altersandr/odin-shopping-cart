import React from "react";

export default function Cart({ cartItems, total, handleAddToCart }) {
  const items = cartItems.map((item) => {
    if (item.quantity === 0) return;
    return (
      <div className="cart-item" width="300px" key={item.id}>
        <img width="100px" src={item.image}></img>
        <div id="pricing-quantity">
          <span style={{ fontSize: "12px" }}>{item.title}</span>
          <span>{item.price}€</span>
          <div>
            <span
              className="minus"
              onClick={() => {
                handleAddToCart({ ...item, quantity: -1 }, false);
              }}
            >
              -
            </span>
            <span className="quantity">{item.quantity}</span>
            <span
              className="plus"
              onClick={() => {
                handleAddToCart({ ...item, quantity: 1 });
              }}
            >
              +
            </span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div id="cart">
      <h1>Your shopping cart</h1>
      <div id="items">{items}</div>
      <br />
      <div id="total-price">{`Total: ${total.toFixed(2)} €`}</div>
      <button className="checkout">Checkout</button>
    </div>
  );
}
