import React, { useEffect, useState } from "react";
import { FooterMenuContainer } from "./Footer.Style";
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
          <a
            onClick={() => {
              alert(
                "You are leaving this page replica!, now heading to Razer original site"
              );
            }}
            href={linkOneHref}
          >
            {linkOneText}
          </a>
        ) : (
          ""
        )}
        {linkTwoText !== undefined ? (
          <a
            onClick={() => {
              alert(
                "You are leaving this page replica!, now heading to Razer original site"
              );
            }}
            href={linkTwoHref}
          >
            {linkTwoText}
          </a>
        ) : (
          ""
        )}
        {linkThreeText !== undefined ? (
          <a
            onClick={() => {
              alert(
                "You are leaving this page replica!, now heading to Razer original site"
              );
            }}
            href={linkThreeHref}
          >
            {linkThreeText}
          </a>
        ) : (
          ""
        )}
        {linkFourText !== undefined ? (
          <a
            onClick={() => {
              alert(
                "You are leaving this page replica!, now heading to Razer original site"
              );
            }}
            href={linkFourHref}
          >
            {linkFourText}
          </a>
        ) : (
          ""
        )}
        {linkFiveText !== undefined ? (
          <a
            onClick={() => {
              alert(
                "You are leaving this page replica!, now heading to Razer original site"
              );
            }}
            href={linkFiveHref}
          >
            {linkFiveText}
          </a>
        ) : (
          ""
        )}
        {linkSixText !== undefined ? (
          <a
            onClick={() => {
              alert(
                "You are leaving this page replica!, now heading to Razer original site"
              );
            }}
            href={linkSixHref}
          >
            {linkSixText}
          </a>
        ) : (
          ""
        )}
        {linkSevenText !== undefined ? (
          <a
            onClick={() => {
              alert(
                "You are leaving this page replica!, now heading to Razer original site"
              );
            }}
            href={linkSevenHref}
          >
            {linkSevenText}
          </a>
        ) : (
          ""
        )}
        {linkEightText !== undefined ? (
          <a
            onClick={() => {
              alert(
                "You are leaving this page replica!, now heading to Razer original site"
              );
            }}
            href={linkEightHref}
          >
            {linkEightText}
          </a>
        ) : (
          ""
        )}
      </ul>
    </FooterMenuContainer>
  );
}

export default FooterMenu;
