import React, { useState } from "react";
import { AppContainer } from "./components/Nav/App.Style";
import Nav from "./components/Nav/Nav";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  // This hook will store if the nav is toggled 'active' or not
  const [NavIsToggled, setNavIsToggled] = useState(false);
  return (
    <AppContainer>
      <GlobalStyle />
      <Nav NavIsToggled={NavIsToggled} setNavIsToggled={setNavIsToggled} />
    </AppContainer>
  );
}

export default App;
