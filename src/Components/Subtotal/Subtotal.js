/* eslint-disable no-unused-vars */
import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "../StateProvider/StateProvider"
import { getBasketTotal } from "../Reducer/Reducer";

export default function Subtotal() {
  
  const [{basket}, dispatch] = useStateValue();

  return (
    <div>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} items): <strong>${value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
        />
         <button>Proceed to Checkout</button>
      </div>
    </div>
  );
}
