import React from "react";
import { NavBox } from "./Nav.Style";
import logo from "../../img/NavIMG/razer-ths-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
type Props = {
  NavIsToggled: boolean;
  setNavIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
};
function Nav({ NavIsToggled, setNavIsToggled }: Props) {
  return (
    <NavBox NavIsToggled={NavIsToggled}>
      <FontAwesomeIcon
        icon={faBars}
        id="barsMenu"
        onClick={() => setNavIsToggled(!NavIsToggled)}
      />
      <img src={logo} alt="logo" />
      <div id="NavLinkList">
        <p>PC</p>
        <p>Console</p>
        <p>Mobile</p>
        <p>Lifestyle</p>
        <p> Services</p>
        <p>Community</p>
        <p>Support</p>
        <p>Store</p>
      </div>
      <FontAwesomeIcon icon={faShoppingCart} />
    </NavBox>
  );
}

export default Nav;
