import React from "react";

export default function Cart({ cartItems }) {
  let price = 0;
  let quantity = 0;
  let ids = [];
  const items = cartItems.map((item) => {
    // ids = [...ids, item.id];
    price += item.price;
    return (
      <div className="cart-item" width="300px" key={item.id}>
        <img width="100px" src={item.image}></img>
        <div id="pricing-quantity">
          <span style={{ fontSize: "12px" }}>{item.title}</span>
          <span>{item.price}€</span>
          <div>
            <span className="minus">-</span>
            <span className="quantity">{1}</span>
            <span className="plus">+</span>
          </div>
        </div>
      </div>
    );
  });

  console.log(price);

  return (
    <div id="cart">
      <h1>Your shopping cart</h1>
      <div id="items">{items}</div>
      <br />
      <div id="total-price">{`Total: ${price.toFixed(2)}`}</div>
      <button className="checkout">Checkout</button>
    </div>
  );
}
