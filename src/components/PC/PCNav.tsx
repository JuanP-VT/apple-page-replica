import React from "react";
import { PCNavWrapper } from "./PC.style";
import PCNavLink from "./PCNavLink";

function PCNav() {
  return (
    <PCNavWrapper>
      <PCNavLink
        linkText="Laptops"
        linkHref="https://www.razer.com/pc/gaming-laptops"
      />
      <PCNavLink
        linkText="Desktops & Components"
        linkHref="https://www.razer.com/pc/gaming-desktops-and-components"
      />
      <PCNavLink
        linkText="Monitors"
        linkHref="https://www.razer.com/gaming/monitors/razer-raptor-27-165hz"
      />
      <PCNavLink
        linkText="Mice"
        linkHref="https://www.razer.com/pc/gaming-mice"
      />
      <PCNavLink
        linkText="Mats"
        linkHref="https://www.razer.com/pc/gaming-mouse-mats"
      />
      <PCNavLink
        linkText="Keyboards"
        linkHref="https://www.razer.com/pc/gaming-keyboards-and-keypads"
      />
      <PCNavLink
        linkText="Headsets"
        linkHref="https://www.razer.com/pc/gaming-headsets-and-audio"
      />
      <PCNavLink
        linkText="Speakers"
        linkHref="https://www.razer.com/pc/gaming-speakers"
      />
      <PCNavLink
        linkText="Streaming"
        linkHref="https://www.razer.com/pc/streaming"
      />
      <PCNavLink
        linkText="Productivity"
        linkHref="https://www.razer.com/productivity"
      />
      <PCNavLink
        linkText="Chairs"
        linkHref="https://www.razer.com/lifestyle/gaming-chairs"
      />
      <PCNavLink
        linkText="Software"
        linkHref="https://www.razer.com/pc/software"
      />
    </PCNavWrapper>
  );
}

export default PCNav;
