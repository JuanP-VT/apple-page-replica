import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { AppContainer } from "./App.Style";
import Nav from "./components/Nav/Nav";
import { GlobalStyle } from "./GlobalStyle";
import PC from "./components/PC/PC";

function App() {
  // This hook will store if the nav is toggled 'active' or not
  const [NavIsToggled, setNavIsToggled] = useState(false);
  return (
    <AppContainer>
      <GlobalStyle />
      <Nav NavIsToggled={NavIsToggled} setNavIsToggled={setNavIsToggled} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pc" element={<PC />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
