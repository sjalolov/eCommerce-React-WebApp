import React from "react";
import "./Checkout.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct.js";
import Subtotal from "../Subtotal/Subtotal.js";

export default function Checkout() {
  return (
    <div>
      <div className="checkout">
        <div className="checkout_left">
          <img className="checkout_ad" src="https://i.postimg.cc/fTdGfBbr/advertising-agency.jpg" alt="none" />
          <div>
            <h2 className="checkout_title">Your Shop Cart</h2>
          </div>
          <CheckoutProduct/>
          <CheckoutProduct/>
          <CheckoutProduct/>
        </div>
        <div className="checkout_right">
            <Subtotal/>
        </div>
      </div>
    </div>
  );
}
