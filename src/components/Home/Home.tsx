import React from "react";
import { HomeWrapper } from "./Home.style";
import HomeMain from "./HomeMain";
function Home() {
  return (
    <HomeWrapper>
      <section>
        <HomeMain />
        <HomeMain />
        <HomeMain />
      </section>
      <section></section>
    </HomeWrapper>
  );
}

export default Home;
