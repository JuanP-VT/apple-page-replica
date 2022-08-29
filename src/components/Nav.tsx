import React from "react";
import { NavBox } from "./Nav.Style";
import logo from "../img/homeIMG/razer-ths-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
function Nav() {
  return (
    <NavBox>
      <img src={logo} alt="logo" />
      <div>
        <p>PC</p>
        <p>Console</p>
        <p>Mobile</p>
        <p>Lifestyle</p>
        <p> Services</p>
        <p>Community</p>
        <p>Support</p>
        <p>Store</p>
      </div>
      <FontAwesomeIcon icon={faSearch} />
      <FontAwesomeIcon icon={faShoppingCart} />
    </NavBox>
  );
}

export default Nav;
