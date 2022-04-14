import React from "react";
import "./Checkout.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct.js";
import Subtotal from "../Subtotal/Subtotal.js";
import { useStateValue } from "../StateProvider/StateProvider";

export default function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div>
      <div className="checkout">
        <div className="checkout_left">
          <img
            className="checkout_ad"
            src="https://i.postimg.cc/fTdGfBbr/advertising-agency.jpg"
            alt="none"
          />
          <div>
            <h2 className="checkout_title">Your Shop Cart</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id= {item.id}
                title= {item.title}
                image= {item.image}
                price= {item.price}
                rating= {item.rating}
              />
            ))}
          </div>
        </div>
        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}
