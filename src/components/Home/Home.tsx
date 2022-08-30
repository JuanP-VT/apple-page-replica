import React from "react";
import { HomeWrapper } from "./Home.style";
import HomeMain from "./HomeMain";
import HomeImageOne from "../../img/homeIMG/HomeOne.jpg";
import HomeImageTwo from "../../img/homeIMG/HomeTwo.jpg";
import HomeImageThree from "../../img/homeIMG/HomeThree.jpg";

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
      <section></section>
    </HomeWrapper>
  );
}

export default Home;
