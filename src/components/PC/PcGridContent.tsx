import React from "react";
import { GridContentWrapper } from "./PC.style";
import PCGridLink from "./PCGridLink";

type Props = {
  imgSRC: string;
  titleText: string;
  descriptionText: string;
};

function PcGridContent({ imgSRC, titleText, descriptionText }: Props) {
  return (
    <GridContentWrapper>
      <div className="top">
        <img src={imgSRC} alt="pc" />
      </div>
      <div className="bot">
        <div className="title">{titleText}</div>
        <div className="description">{descriptionText}</div>
        <PCGridLink
          linkText="Learn More"
          linkHref="https://www.razer.com/pc/gaming-laptops"
        />
      </div>
    </GridContentWrapper>
  );
}

export default PcGridContent;
