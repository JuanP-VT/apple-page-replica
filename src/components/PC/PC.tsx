import React from "react";
import { PCWrapper } from "./PC.style";
import PCMain from "./PCMain";
import PCNav from "./PCNav";
import img1 from "../../img/pcIMG/razer-blade-15-2022-laptop-500x500.jpg";
import img2 from "../../img/pcIMG/desktops-components-category--500x500.jpg";
import img3 from "../../img/pcIMG/accessories-category-500x500.jpg";
import img4 from "../../img/pcIMG/mice-category-500x500.jpg";
import img5 from "../../img/pcIMG/mousemats-category-500x500.jpg";
import img6 from "../../img/pcIMG/keyboards-category-500x500.jpg";
import img7 from "../../img/pcIMG/headsets-category-500x500.jpg";
import img8 from "../../img/pcIMG/speakers-category-500x500.jpg";
import img9 from "../../img/pcIMG/chairs-category-500x500.jpg";

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
        imgSrc1={img1}
        titleText1="LAPTOP"
        descriptionText1="Sleek high-performance gaming laptops"
        linkHref1="https://www.razer.com/pc/gaming-laptops"
        titleText2="DESKTOPS & COMPONENTS"
        imgSrc2={img2}
        descriptionText2="Engineered for enthusiasts and designed for performance"
        linkHref2="https://www.razer.com/pc/gaming-desktops-and-components"
        titleText3="ACCESSORIES"
        descriptionText3="Crafting the perfect gaming experience"
        imgSrc3={img3}
        linkHref3="https://www.razer.com/pc/gaming-pc-accessories"
      />
      <PCMain
        headerTitle="PERIPHERALS"
        headerContent="The most powerful rigs mean nothing without the high-performance gear to match. Understand what it means to wield the unfair advantage as you experience industry-leading levels of precision, control, and immersion."
        imgSrc1={img4}
        imgSrc2={img5}
        imgSrc3={img6}
        imgSrc4={img7}
        imgSrc5={img8}
        imgSrc6={img9}
        titleText1="MICE"
        titleText2="MOUSE MATS"
        titleText3="KEYBOARDS"
        titleText4="HEADSETS"
        titleText5="SPEAKERS"
        titleText6="CHAIRS"
        descriptionText1="Pixel-perfect precision for any hand size and grip style"
        descriptionText2="Soft, hard, and hybrid designs to enhance your control"
        descriptionText3="Optical, mechanical, and every type in between"
        descriptionText4="Tuned for gaming, lifestyle, or a perfect mix of both"
        descriptionText5="Set the soundstage for full-range immersion"
        descriptionText6="Perfecting the science of comfort and support"
        linkHref1="https://www.razer.com/pc/gaming-mice"
        linkHref2="https://www.razer.com/pc/gaming-mouse-mats"
        linkHref3="https://www.razer.com/pc/gaming-keyboards-and-keypads"
        linkHref4="https://www.razer.com/pc/gaming-headsets-and-audio"
        linkHref5="https://www.razer.com/pc/gaming-speakers"
        linkHref6="https://www.razer.com/lifestyle/gaming-chairs"
      />
    </PCWrapper>
  );
}

export default PC;
