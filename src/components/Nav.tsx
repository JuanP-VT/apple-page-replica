import React from "react";
import { NavBox } from "./Nav.Style";
import logo from "../img/homeIMG/razer-ths-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
function Nav() {
  return (
    <NavBox>
      <img src={logo} alt="logo" />
      <div>PC</div>
      <div>Console</div>
      <div>Mobile</div>
      <div>Lifestyle</div>
      <div> Services</div>
      <div>Community</div>
      <div>Support</div>
      <div>Store</div>
      <FontAwesomeIcon icon={faSearch} />
      <FontAwesomeIcon icon={faShoppingCart} />
    </NavBox>
  );
}

export default Nav;
