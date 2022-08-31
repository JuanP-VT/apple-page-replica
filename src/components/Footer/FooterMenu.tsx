import React, { useEffect, useState } from "react";
import { FooterMenuContainer } from "./Footer.Style";

function FooterMenu() {
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
      <span onClick={() => setListIsToggled(!ListIsToggled)}>Shop</span>
      <ul>
        <li>Op1</li>
        <li>Op2</li>
        <li>Op3</li>
        <li>Op4</li>
        <li>Op5</li>
      </ul>
    </FooterMenuContainer>
  );
}

export default FooterMenu;
