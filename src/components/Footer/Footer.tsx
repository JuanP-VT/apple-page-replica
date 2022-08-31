import React from "react";
import { FooterContainer } from "./Footer.Style";
import FooterMenu from "./FooterMenu";

function Footer() {
  return (
    <FooterContainer>
      <div className="content">
        <div className="main">
          <div className="links">
            <FooterMenu />
            <FooterMenu />
            <FooterMenu />
          </div>
          <div className="forGamers">gamers</div>
        </div>
        <div className="legal">Legal</div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
