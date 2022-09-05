import React from "react";
import { GridContentWrapper } from "./PC.style";
import PCGridLink from "./PCGridLink";

type Props = {
  imgSRC: string | undefined;
  titleText: string | undefined;
  descriptionText: string | undefined;
  linkText: string;
  linkHref: string | undefined;
};

function PcGridContent({
  imgSRC,
  titleText,
  descriptionText,
  linkText,
  linkHref,
}: Props) {
  return (
    <GridContentWrapper>
      <div className="top">
        <img src={imgSRC} alt="pc" />
      </div>
      <div className="bot">
        <div className="title">{titleText}</div>
        <div className="description">{descriptionText}</div>
        <PCGridLink linkText={linkText} linkHref={linkHref ? linkHref : ""} />
      </div>
    </GridContentWrapper>
  );
}

export default PcGridContent;
