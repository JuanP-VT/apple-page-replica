import React from "react";
import { NavBox } from "./Nav.Style";
import logo from "../img/homeIMG/razer-ths-logo.svg";
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
    </NavBox>
  );
}

export default Nav;
