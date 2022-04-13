import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StoreIcon from "@mui/icons-material/Store";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <StoreIcon className="header_logomage" fontSize="large" />
        <h2 className="header_logoTitle">eCommerce</h2>
      </div>
      <div className="header_search">
        <input type="text" className="header_searchInput"></input>
        <SearchOutlinedIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_item">
          <span className="header_LineOne">Hello User</span>
          <span className="header_LineTwo">Login</span>
        </div>
        <div className="header_item">
          <span className="header_LineOne">Your</span>
          <span className="header_LineTwo">Shop</span>
        </div>
        <div className="itemBasket">
          <ShoppingBasketIcon />
          <span className="header_LineTwo nav_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}
