import React, { useEffect, useState } from "react";
import { PCNavWrapper } from "./PC.style";
import PCNavLink from "./PCNavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
function PCNav() {
  const [ListIsToggled, setListIsToggled] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", handleScreenChange);
    return () => window.removeEventListener("resize", handleScreenChange);
    function handleScreenChange() {
      const width = window.innerWidth;
      if (width <= 1070) {
        setListIsToggled(false);
      } else {
        setListIsToggled(true);
      }
    }
  }, [ListIsToggled]);
  return (
    <PCNavWrapper listIsToggled={ListIsToggled}>
      <div className="toggle" onClick={() => setListIsToggled(!ListIsToggled)}>
        <p>PC</p>
        <div className="icons">
          <FontAwesomeIcon icon={faArrowDown} className="down" />
          <FontAwesomeIcon icon={faArrowUp} className="up" />
        </div>
      </div>
      <div className="links">
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
      </div>
    </PCNavWrapper>
  );
}

export default PCNav;
