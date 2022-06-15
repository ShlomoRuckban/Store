import React from "react";
import { CartItem } from "../../components";
import "./cart.css";

const Cart = () => {
  let cartItems = [].map((c) => {
    return <CartItem />;
  });
  console.log(cartItems);

  return (
    <div className="cart-container">
      <div className="cart-body">{cartItems}</div>
    </div>
  );
};

export default Cart;
