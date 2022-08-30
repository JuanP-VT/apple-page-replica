import React from "react";
import { ArrowLinkStyle } from "./Home.style";

type Props = {
  href: string;
  textContent: string;
};

function ArrowLink({ textContent, href }: Props) {
  return (
    <ArrowLinkStyle
      href={href}
      onClick={() => {
        alert(
          "You are leaving this page replica!, now heading to Razer original site"
        );
      }}
    >
      {textContent}
    </ArrowLinkStyle>
  );
}

export default ArrowLink;
