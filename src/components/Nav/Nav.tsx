import React from "react";
import { NavBox, StyledLink } from "./Nav.Style";
import logo from "../../img/NavIMG/razer-ths-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
      <StyledLink to="/">
        <img src={logo} alt="logo" />
      </StyledLink>
      <div id="NavLinkList">
        <StyledLink to="/pc">PC</StyledLink>
        <StyledLink to="/consoles">Console</StyledLink>
        <StyledLink to="/mobile">Mobile</StyledLink>
        <StyledLink to="lifestyle">Lifestyle</StyledLink>
        <StyledLink to="services"> Services</StyledLink>
        <StyledLink to="community">Community</StyledLink>
        <StyledLink to="support">Support</StyledLink>
        <StyledLink to="store">Store</StyledLink>
      </div>
    </NavBox>
  );
}

export default Nav;
