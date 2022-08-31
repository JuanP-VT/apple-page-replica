import React from "react";
import { FooterContainer } from "./Footer.Style";
import FooterMenu from "./FooterMenu";

function Footer() {
  return (
    <FooterContainer>
      <div className="content">
        <div className="main">
          <div className="links">
            <FooterMenu
              label="Shop"
              linkOneText="Razer Stores"
              linkOneHref="https://www.razer.com/razerstores"
              linkTwoText="Razer Cafe"
              linkTwoHref="https://www.razer.com/razercafe"
              linkThreeText="Store Locator"
              linkThreeHref="https://www.razer.com/store-finder"
              linkFourText="Purchase Program"
              linkFourHref="https://www.razer.com/store/programs"
              linkFiveText="Education"
              linkFiveHref="https://www.razer.com/education"
              linkSixText="Exclusives"
              linkSixHref="https://www.razer.com/exclusives"
              linkSevenText="Razer Store Rewards"
              linkSevenHref="https://www.razer.com/store/rewards"
              linkEightText="Newsletter"
              linkEightHref="https://www.razer.com/newsletter"
            />
            <FooterMenu label="test" />
            <FooterMenu label="test" />
          </div>
          <div className="forGamers">gamers</div>
        </div>
        <div className="legal">Legal</div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
