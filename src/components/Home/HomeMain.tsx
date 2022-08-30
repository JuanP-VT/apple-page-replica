import React from "react";
import { ArrowLink, HomeMainContainer } from "./Home.style";

function HomeMain() {
  return (
    <HomeMainContainer>
      <h1>RAZER BASILISK V3 PRO</h1>
      <h3>OUR MOST ADVANCED GAMING MOUSE YET</h3>
      <div className="links">
        <ArrowLink
          href="https://www.razer.com/gaming-mice/razer-basilisk-v3-pro"
          onClick={() => {
            alert(
              "You are leaving this page replica!, now heading to Razer original site"
            );
          }}
        >
          Learn More
        </ArrowLink>
        <ArrowLink
          href="https://www.razer.com/gaming-mice/razer-basilisk-v3-pro/select-your-model"
          onClick={() => {
            alert(
              "You are leaving this page replica!, now heading to Razer original site"
            );
          }}
        >
          Buy
        </ArrowLink>
      </div>
    </HomeMainContainer>
  );
}

export default HomeMain;
