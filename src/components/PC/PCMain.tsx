import React from "react";
import { PCMainWrapper } from "./PC.style";
import PcGridContent from "./PcGridContent";
import PCHeader from "./PCHeader";

type Props = {
  headerTitle: string;
  headerContent: string;
  imgSrc: string;
  titleText: string;
  descriptionText: string;
};

function PCMain({
  headerTitle,
  headerContent,
  imgSrc,
  titleText,
  descriptionText,
}: Props) {
  return (
    <PCMainWrapper>
      <PCHeader title={headerTitle} content={headerContent} />
      <div className="grid">
        <PcGridContent
          imgSRC={imgSrc}
          titleText={titleText}
          descriptionText={descriptionText}
        />
      </div>
    </PCMainWrapper>
  );
}

export default PCMain;
