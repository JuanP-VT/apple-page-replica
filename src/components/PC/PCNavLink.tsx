import React from "react";
import { PCNavStyledLink } from "./PC.style";
type Props = {
  linkText: string;
  linkHref: string;
};
function PCNavLink({ linkHref, linkText }: Props) {
  return (
    <PCNavStyledLink
      href={linkHref}
      onClick={() => {
        alert(
          "You are leaving this page replica!, now heading to Razer original site"
        );
      }}
    >
      <p>{linkText}</p>
    </PCNavStyledLink>
  );
}

export default PCNavLink;
