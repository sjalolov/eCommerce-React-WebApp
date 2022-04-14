import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider/StateProvider";

export default function CheckoutProduct({ id, title, image, price, rating }) {
  
  // eslint-disable-next-line no-unused-vars
  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
    })
}

  return (
    <div>
      <div className="checkout_product">
        <img src={image} alt="" className="checkout_product_image" />
        <div className="checkout_product_info">
          <p>{title}</p>
          <p className="checkout_product_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkout_product_rating">
          {Array(rating).fill().map((_,i) => (
              <p>&#11088;</p>
            ))}
          </div>
        </div>
        <button className="checkout_product_button" onClick={removeFromBasket}>Remove from Cart</button>
      </div>
    </div>
  );
}
