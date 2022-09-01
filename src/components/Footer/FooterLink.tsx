import React from "react";
import { StyledFooterLink } from "./Footer.Style";

type Props = {
  textContent: string | undefined;
  href: string | undefined;
};

function FooterLink({ textContent, href }: Props) {
  return (
    <StyledFooterLink
      onClick={() => {
        alert(
          "You are leaving this page replica!, now heading to Razer original site"
        );
      }}
      href={href}
    >
      <p>{textContent}</p>
    </StyledFooterLink>
  );
}

export default FooterLink;
