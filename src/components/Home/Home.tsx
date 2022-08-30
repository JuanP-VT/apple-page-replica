import React from "react";
import { HomeWrapper } from "./Home.style";
import HomeMain from "./HomeMain";
import HomeImageOne from "../../img/homeIMG/HomeOne.jpg";
function Home() {
  return (
    <HomeWrapper>
      <section>
        <HomeMain backgroundImg={HomeImageOne} />
        <HomeMain backgroundImg="" />
        <HomeMain backgroundImg="" />
      </section>
      <section></section>
    </HomeWrapper>
  );
}

export default Home;
