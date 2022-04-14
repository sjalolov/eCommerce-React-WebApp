import React from "react";
import "./CheckoutProduct.css";

export default function CheckoutProduct({ id, title, image, price, rating }) {
  return (
    <div>
        <div className="checkout_product">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="" className="checkout_product_image" />

          <div className="checkout_product_info">
            <p>Laptop Bag Laptop Bag Laptop Bag Laptop Bag Laptop Bag Laptop Bag </p>
            <p className="checkout_product_price">
              <small>$</small>
              <strong>300</strong>
            </p>
            <div className="checkout_product_rating">
              &#11088;&#11088;&#11088;&#11088;&#11088;
            </div>
          </div>
          <button className="checkout_product_button">Remove from Cart</button>
        </div>
      </div>
  );
}
