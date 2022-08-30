import React from "react";
import ArrowLink from "./ArrowLink";
import { HomeMainContainer } from "./Home.style";
type Props = {
  backgroundImg: string;
  headerText: string;
  contentText: string;
  linkOneTextContent: string;
  linkOneHref: string;
  linkTwoTextContent?: string;
  linkTwoHref?: string;
};
function HomeMain({
  backgroundImg,
  headerText,
  contentText,
  linkOneTextContent,
  linkOneHref,
  linkTwoTextContent,
  linkTwoHref,
}: Props) {
  return (
    <HomeMainContainer backgroundImg={backgroundImg}>
      <h1>{headerText}</h1>
      <h3>{contentText}</h3>
      <div className="links">
        <ArrowLink href={linkOneHref} linkTextContent={linkOneTextContent} />
        {linkTwoTextContent === undefined ? (
          ""
        ) : (
          <ArrowLink href={linkTwoHref} linkTextContent={linkTwoTextContent} />
        )}
      </div>
    </HomeMainContainer>
  );
}

export default HomeMain;
