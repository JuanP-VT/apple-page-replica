import React from "react";
import { StyledGridLink } from "./PC.style";

type Props = {
  linkText: string;
  linkHref: string;
};

function PCGridLink({ linkText, linkHref }: Props) {
  return (
    <StyledGridLink
      href={linkHref}
      onClick={() => {
        alert(
          "You are leaving this page replica!, now heading to Razer original site"
        );
      }}
    >
      {linkText}
    </StyledGridLink>
  );
}

export default PCGridLink;
