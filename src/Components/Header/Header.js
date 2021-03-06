/* eslint-disable no-unused-vars */
import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StoreIcon from "@mui/icons-material/Store";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";

export default function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header_logo">
          <StoreIcon className="header_logomage" fontSize="large" />
          <h2 className="header_logoTitle">eCommerce</h2>
        </div>
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput"></input>
        <SearchOutlinedIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="header_item">
            <span className="header_LineOne">Hello User</span>
            <span className="header_LineTwo">Login</span>
          </div>
        </Link>
        <div className="header_item">
          <span className="header_LineOne">Your</span>
          <span className="header_LineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="itemBasket">
            <ShoppingBasketIcon />
            <span className="header_LineTwo nav_basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
