import React from "react";
import { GridContentWrapper } from "./PC.style";

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
      </div>
    </GridContentWrapper>
  );
}

export default PcGridContent;
