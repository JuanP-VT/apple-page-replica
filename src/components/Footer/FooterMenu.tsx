import React, { useEffect, useState } from "react";
import { FooterMenuContainer } from "./Footer.Style";
import FooterLink from "./FooterLink";
type Props = {
  label: string;
  linkOneText?: string;
  linkOneHref?: string;
  linkTwoText?: string;
  linkTwoHref?: string;
  linkThreeText?: string;
  linkThreeHref?: string;
  linkFourText?: string;
  linkFourHref?: string;
  linkFiveText?: string;
  linkFiveHref?: string;
  linkSixText?: string;
  linkSixHref?: string;
  linkSevenText?: string;
  linkSevenHref?: string;
  linkEightText?: string;
  linkEightHref?: string;
};

function FooterMenu({
  label,
  linkEightHref,
  linkEightText,
  linkFiveHref,
  linkFiveText,
  linkFourHref,
  linkFourText,
  linkOneHref,
  linkOneText,
  linkSevenHref,
  linkSevenText,
  linkSixHref,
  linkSixText,
  linkThreeHref,
  linkThreeText,
  linkTwoHref,
  linkTwoText,
}: Props) {
  // This state will save if list item is active
  const [ListIsToggled, setListIsToggled] = useState(true);
  //This hook will handle an event that changes the ListIsToggled state to
  // false when screen size is below 780px
  useEffect(() => {
    window.addEventListener("resize", handleScreenChange);
    return () => window.removeEventListener("resize", handleScreenChange);
    function handleScreenChange() {
      const width = window.innerWidth;
      if (width <= 780) {
        setListIsToggled(false);
      } else {
        setListIsToggled(true);
      }
    }
  }, []);
  return (
    <FooterMenuContainer ListIsToggled={ListIsToggled}>
      <span onClick={() => setListIsToggled(!ListIsToggled)}>{label}</span>
      <ul>
        {linkOneText !== undefined ? (
          <FooterLink textContent={linkOneText} href={linkOneHref} />
        ) : (
          ""
        )}
        {linkTwoText !== undefined ? (
          <FooterLink textContent={linkTwoText} href={linkTwoHref} />
        ) : (
          ""
        )}
        {linkThreeText !== undefined ? (
          <FooterLink textContent={linkThreeText} href={linkThreeHref} />
        ) : (
          ""
        )}
        {linkFourText !== undefined ? (
          <FooterLink textContent={linkFourText} href={linkFourHref} />
        ) : (
          ""
        )}
        {linkFiveText !== undefined ? (
          <FooterLink textContent={linkFiveText} href={linkFiveHref} />
        ) : (
          ""
        )}
        {linkSixText !== undefined ? (
          <FooterLink textContent={linkSixText} href={linkSixHref} />
        ) : (
          ""
        )}
        {linkSevenText !== undefined ? (
          <FooterLink textContent={linkSevenText} href={linkSevenHref} />
        ) : (
          ""
        )}
        {linkEightText !== undefined ? (
          <FooterLink textContent={linkEightText} href={linkEightHref} />
        ) : (
          ""
        )}
      </ul>
    </FooterMenuContainer>
  );
}

export default FooterMenu;
