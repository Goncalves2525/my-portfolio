import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import ParticlesBackground from "./components/particlesBackground/ParticlesBackground";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <ParticlesBackground />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Main theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
