import React from "react";
import { HomeWrapper } from "./Home.style";
import HomeMain from "./HomeMain";
import HomeImageOne from "../../img/homeIMG/HomeOne.jpg";
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
          backgroundImg={HomeImageOne}
          headerText=""
          contentText=""
          linkOneTextContent=""
          linkOneHref=""
        />
        <HomeMain
          backgroundImg={HomeImageOne}
          headerText=""
          contentText=""
          linkOneTextContent=""
          linkOneHref=""
        />
      </section>
      <section></section>
    </HomeWrapper>
  );
}

export default Home;
