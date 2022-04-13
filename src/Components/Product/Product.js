import React from "react";
import "./Product.css";

export default function Product({id, title, image, price, rating}) {
  return (
    <div>
      <div className="product">
        <div className="product_info">
          <p>{title}</p>
          <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product_rating">
          &#11088;&#11088;&#11088;&#11088;&#11088;
          </div>
        </div>

        <img
          src={image}
          alt="" className="product_image"
        />
        <button className="product_button">Add to Cart</button>
      </div>
    </div>
  );
}
