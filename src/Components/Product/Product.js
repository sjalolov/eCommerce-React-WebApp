import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider/StateProvider";

export default function Product({id, title, image, price, rating}) {
  
// eslint-disable-next-line no-unused-vars
const [state, dispatch] = useStateValue();

const addToBasket = () => {
  dispatch({
    type:"ADD_TO_BASKET",
    item: {
      id: id,
      image: image,
      price: price,
      rating: rating,

    },
  });
};

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
            {Array(rating).fill().map((_) => (
              <p>&#11088;</p>
            ))}
          </div>
        </div>

        <img
          src={image}
          alt="none" className="product_image"
        />
        <button className="product_button" onClick={addToBasket}>Add to Cart</button>
      </div>
    </div>
  );
}
