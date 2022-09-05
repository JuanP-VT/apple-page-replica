import React from "react";
import { PCWrapper } from "./PC.style";
import PCMain from "./PCMain";
import PCNav from "./PCNav";
import imgOne from "../../img/pcIMG/razer-blade-15-2022-laptop-500x500.jpg";
import imgTwo from "../../img/pcIMG/desktops-components-category--500x500.jpg";
import imgThree from "../../img/pcIMG/accessories-category-500x500.jpg";
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
        imgSrc1={imgOne}
        titleText1="LAPTOP"
        descriptionText1="Sleek high-performance gaming laptops"
        linkHref1="https://www.razer.com/pc/gaming-laptops"
        titleText2="DESKTOPS & COMPONENTS"
        imgSrc2={imgTwo}
        descriptionText2="Engineered for enthusiasts and designed for performance"
        linkHref2="https://www.razer.com/pc/gaming-desktops-and-components"
        titleText3="ACCESSORIES"
        descriptionText3="Crafting the perfect gaming experience"
        imgSrc3={imgThree}
        linkHref3="https://www.razer.com/pc/gaming-pc-accessories"
      />
    </PCWrapper>
  );
}

export default PC;
