import React from "react";
import { PCMainWrapper } from "./PC.style";
import PcGridContent from "./PcGridContent";
import PCHeader from "./PCHeader";

type Props = {
  headerTitle: string;
  headerContent: string;
  imgSrc1: string;
  titleText1: string;
  descriptionText1: string;
  titleText2?: string;
  imgSrc2?: string;
  titleText3?: string;
  imgSrc3?: string;
  titleText4?: string;
  imgSrc4?: string;
  titleText5?: string;
  imgSrc5?: string;
  titleText6?: string;
  imgSrc6?: string;
  descriptionText2?: string;
  descriptionText3?: string;
  descriptionText4?: string;
  descriptionText5?: string;
  descriptionText6?: string;
  linkHref1: string;
  linkHref2?: string;
  linkHref3?: string;
  linkHref4?: string;
  linkHref5?: string;
  linkHref6?: string;
};

function PCMain({
  headerTitle,
  headerContent,
  imgSrc1,
  imgSrc2,
  imgSrc3,
  imgSrc4,
  imgSrc5,
  imgSrc6,
  titleText1,
  titleText2,
  titleText3,
  titleText4,
  titleText5,
  titleText6,
  descriptionText1,
  descriptionText2,
  descriptionText3,
  descriptionText4,
  descriptionText5,
  descriptionText6,
  linkHref1,
  linkHref2,
  linkHref3,
  linkHref4,
  linkHref5,
  linkHref6,
}: Props) {
  return (
    <PCMainWrapper>
      <PCHeader title={headerTitle} content={headerContent} />
      <div className="grid">
        <PcGridContent
          imgSRC={imgSrc1}
          titleText={titleText1}
          descriptionText={descriptionText1}
          linkText="Learn More"
          linkHref={linkHref1}
        />
        {titleText2 ? (
          <PcGridContent
            imgSRC={imgSrc2}
            titleText={titleText2}
            descriptionText={descriptionText2}
            linkText="Learn More"
            linkHref={linkHref2}
          />
        ) : (
          ""
        )}
        {titleText3 ? (
          <PcGridContent
            imgSRC={imgSrc3}
            titleText={titleText3}
            descriptionText={descriptionText3}
            linkText="Learn More"
            linkHref={linkHref3}
          />
        ) : (
          ""
        )}
      </div>
    </PCMainWrapper>
  );
}

export default PCMain;
