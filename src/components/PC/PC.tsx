import React from "react";
import { PCWrapper } from "./PC.style";
import PCMain from "./PCMain";
import PCNav from "./PCNav";

function PC() {
  return (
    <PCWrapper>
      <PCNav />
      <PCMain
        headerTitle="LAPTOPS & DESKTOPS"
        headerContent="Razer systems are crafted to provide the ultimate performance for gaming
        and work. Enjoy desktop power made mobile with our gaming and
        productivity laptops, or go all-out for your build as you assemble the
        most powerful aRGB Chroma powered battlestation"
        imgSrc="https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/razer-blade-15-2022-laptop-500x500.jpg"
        titleText="LAPTOP"
        descriptionText="Sleek high-performance gaming laptops"
      />
    </PCWrapper>
  );
}

export default PC;
