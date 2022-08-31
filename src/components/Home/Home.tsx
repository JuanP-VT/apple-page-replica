import React from "react";
import { HomeWrapper } from "./Home.style";
import HomeMain from "./HomeMain";
import HomeImageOne from "../../img/homeIMG/HomeOne.jpg";
import HomeImageTwo from "../../img/homeIMG/HomeTwo.jpg";
import HomeImageThree from "../../img/homeIMG/HomeThree.jpg";
import HomeImageFour from "../../img/homeIMG/HomeFour.jpg";
import HomeImageFive from "../../img/homeIMG/HomeFive.jpg";
import HomeImageSix from "../../img/homeIMG/HomeSix.jpg";
import HomeImageSeven from "../../img/homeIMG/HomeSeven.jpg";
import HomeImageEight from "../../img/homeIMG/HomeEigth.jpg";
import HomeImageNine from "../../img/homeIMG/HomeNine.jpg";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <HomeWrapper>
      <section>
        <HomeMain
          backgroundImg={HomeImageOne}
          headerText="RAZER BASILISK V3 PRO"
          contentText="OUR MOST ADVANCED GAMING MOUSE YET"
          linkOneTextContent="Learn More"
          linkOneHref="https://www.razer.com/gaming-mice/razer-basilisk-v3-pro"
          linkTwoTextContent="Buy"
          linkTwoHref="https://www.razer.com/gaming-mice/razer-basilisk-v3-pro/select-your-model"
        />
        <HomeMain
          backgroundImg={HomeImageTwo}
          headerText="LET THE GAME BEGIN"
          contentText="LIMITED-TIME SPECIALS ON SELECTED RAZER BLADES"
          linkOneTextContent="Shop Now"
          linkOneHref="https://www.razer.com/campaigns/intel-gamer-days-2022"
        />
        <HomeMain
          backgroundImg={HomeImageThree}
          headerText="NEW RAZER BLADE 15"
          contentText="WORLD'S FIRST 240Hz OLED LAPTOP"
          linkOneTextContent="Learn More"
          linkOneHref="https://www.razer.com/gaming-laptops/razer-blade"
          linkTwoTextContent="Buy"
          linkTwoHref="https://www.razer.com/gaming-laptops/razer-blade-15/razercare-bundles"
        />
      </section>
      <section className="grid">
        <HomeMain
          backgroundImg={HomeImageFour}
          headerText="SNEKI SNEK ANIMATION SERIES"
          contentText="SEASON 2"
          linkOneTextContent="Watch Now"
          linkOneHref="https://www.razer.com/sneki-snek/animated-series"
        />{" "}
        <HomeMain
          backgroundImg={HomeImageFive}
          headerText="WIN IT YOUR WAY"
          contentText="DISCOVER WHAT IT MEANS TO WIN IT YOUR WAY"
          linkOneTextContent="Start your journey"
          linkOneHref="https://www.razer.com/campaigns/win-it-your-way"
        />{" "}
        <HomeMain
          backgroundImg={HomeImageSix}
          headerText="NEW RAZER BLADE 14"
          contentText="ULTRA QUARTZ. ULTRA POWERFUL."
          linkOneTextContent="Learn More"
          linkOneHref="https://www.razer.com/gaming-laptops/razer-blade-14"
          linkTwoTextContent="Buy"
          linkTwoHref="https://www.razer.com/shop/pc/gaming-laptops?query=:newest:category:system-laptops:system-display:14%2Binch"
        />{" "}
        <HomeMain
          backgroundImg={HomeImageSeven}
          headerText="RAZER DEATHSTALKER V2 PRO TENKEYLESS"
          contentText="LOW-PROFILE ERGONOMICS. HIGH-PERFORMANCE WIRELESS."
          linkOneTextContent="Learn More"
          linkOneHref="https://www.razer.com/gaming-keyboards/razer-deathstalker-v2-pro-tenkeyless"
          linkTwoTextContent="Buy"
          linkTwoHref="https://www.razer.com/gaming-keyboards/razer-deathstalker-v2-pro-tenkeyless/RZ03-04370200-R3U1"
        />
        <HomeMain
          backgroundImg={HomeImageEight}
          headerText="RAZER ENKI PRI"
          contentText="ULTIMATE ALL-DAY COMFORT."
          linkOneTextContent="Koenigsegg Edition"
          linkOneHref="https://www.razer.com/gaming-chairs/razer-enki-pro-koenigsegg"
          linkTwoTextContent="Williams Esport Edition"
          linkTwoHref="https://www.razer.com/gaming-chairs/razer-enki-pro-williams"
        />
        <HomeMain
          backgroundImg={HomeImageNine}
          headerText="GENSHI IMPACT V3.0 IS LIVE"
          contentText="GET 7% REBATE NOW."
          linkOneTextContent="Find Out More"
          linkOneHref="https://gold.razer.com/gold/promotions/genshinimpact-version3-phase1?utm_source=website&utm_medium=organic&utm_campaign=GLOBAL_RG_240822_GenshinImpactV3.0_Aug22&utm_content=aug_razercom_rg_promo&_gl=1*18zq4qf*_ga*OTQ3MzIxOTkuMTY2MTc5NTcxMg..*_ga_3TRK53PM75*MTY2MTkwNjQ2Mi45LjEuMTY2MTkwODA2My41NS4wLjA.&_ga=2.98435671.952502628.1661795712-94732199.1661795712"
        />
      </section>
      <Footer />
    </HomeWrapper>
  );
}

export default Home;
