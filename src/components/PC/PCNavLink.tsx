import React from "react";
import { PCNavStyledLink } from "./PC.style";

function PCNavLink() {
  return (
    <PCNavStyledLink
      onClick={() => {
        alert(
          "You are leaving this page replica!, now heading to Razer original site"
        );
      }}
    >
      PCNavLink
    </PCNavStyledLink>
  );
}

export default PCNavLink;
