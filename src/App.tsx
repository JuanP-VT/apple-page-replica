import React from "react";
import { AppContainer } from "./components/App.Style";
import Nav from "./components/Nav";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Nav />
    </AppContainer>
  );
}

export default App;
