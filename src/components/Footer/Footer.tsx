import React from "react";
import { FooterContainer } from "./Footer.Style";
import FooterMenu from "./FooterMenu";
import fbIcon from "../../img/footerImg/SM0001-facebook.svg";
import instaIcon from "../../img/footerImg/SM0003-instagram.svg";
import twitterIcon from "../../img/footerImg/SM0005-twitter.svg";
import FooterLink from "./FooterLink";
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
            <FooterMenu
              label="Explore"
              linkOneText="Technology"
              linkOneHref="https://www.razer.com/technology"
              linkTwoText="Chroma RGB"
              linkTwoHref="https://www.razer.com/chroma"
              linkThreeText="Concepts"
              linkThreeHref="https://www.razer.com/concepts"
              linkFourText="Esports"
              linkFourHref="https://www.razer.com/esports"
              linkFiveText="Collabs"
              linkFiveHref="https://www.razer.com/lifestyle/collabs"
            />
            <FooterMenu
              label="Support"
              linkOneText="Get Help"
              linkOneHref="https://support.razer.com/?_gl=1*1rqv64*_ga*OTQ3MzIxOTkuMTY2MTc5NTcxMg..*_ga_3TRK53PM75*MTY2MTk1OTE1Ni4xMS4xLjE2NjE5NjExODIuNTMuMC4w&_ga=2.139684603.952502628.1661795712-94732199.1661795712"
              linkTwoText="Registration & Warranty"
              linkTwoHref="https://www.razer.com/product-registration"
              linkThreeText="RazerStore Support"
              linkThreeHref="https://www.razer.com/razerstore-support"
              linkFourText="RazerCare"
              linkFourHref="https://www.razer.com/razercare"
              linkFiveText="Manage Razer ID"
              linkFiveHref="https://razerid.razer.com/?_gl=1*l524wh*_ga*OTQ3MzIxOTkuMTY2MTc5NTcxMg..*_ga_3TRK53PM75*MTY2MTk1OTE1Ni4xMS4xLjE2NjE5NjExODUuNTAuMC4w&_ga=2.139684603.952502628.1661795712-94732199.1661795712"
              linkSixText="Support Videos"
              linkSixHref="https://www.youtube.com/channel/UCrG4K8-XFEK5FyCz_jVzV-A/videos"
              linkSevenText="Accessibility Statement"
              linkSevenHref="https://www.razer.com/legal/commitment-to-accessibility"
            />
            <FooterMenu
              label="Company"
              linkOneText="About Us"
              linkOneHref="https://www.razer.com/about-razer"
              linkTwoText="Carreer"
              linkTwoHref="https://careers.razer.com/?_gl=1*2quuz7*_ga*OTQ3MzIxOTkuMTY2MTc5NTcxMg..*_ga_3TRK53PM75*MTY2MTk1OTE1Ni4xMS4xLjE2NjE5NjEzMTQuMjEuMC4w&_ga=2.130797127.952502628.1661795712-94732199.1661795712&__cf_chl_tk=1vWId6IAWqS7fZUNUntzJ0QopvLP6xE74elLXDjuNnM-1661961350-0-gaNycGzNDj0"
              linkThreeText="Press Room"
              linkThreeHref="https://press.razer.com/?_gl=1%2A2quuz7%2A_ga%2AOTQ3MzIxOTkuMTY2MTc5NTcxMg..%2A_ga_3TRK53PM75%2AMTY2MTk1OTE1Ni4xMS4xLjE2NjE5NjEzMTQuMjEuMC4w&_ga=2.130797127.952502628.1661795712-94732199.1661795712"
              linkFourText="zVentures"
              linkFourHref="https://www.zvntrs.com/"
              linkFiveText="Contact Us"
              linkFiveHref="https://www.razer.com/contact-us"
            />
          </div>
          <div className="forGamers">
            <p>FOR GAMERS. BY GAMERS.™</p>
            <div className="icons">
              <a href="https://www.facebook.com/razerlatam/?brand_redir=13848807575">
                <img src={fbIcon} alt="icon" />
              </a>
              <a href="https://www.instagram.com/razer/">
                <img src={instaIcon} alt="icon" />
              </a>
              <a href="https://twitter.com/Razer">
                <img src={twitterIcon} alt="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="legal">
          <FooterLink textContent="Avion" href="www.google.com" />
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
