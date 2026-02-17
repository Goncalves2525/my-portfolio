import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { GlobalStyles } from "./global";
import { ThemeContextProvider, ThemeContext } from "./context/ThemeContext";
import ParticlesBackground from "./components/particlesBackground/ParticlesBackground";
import CloudsBackground from "./components/cloudsBackground/CloudsBackground";
import CelestialBody from "./components/celestialBody/CelestialBody";

function App() {
  return (
    <ThemeContextProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <>
            <GlobalStyles />
            <ParticlesBackground />
            <CloudsBackground />
            <CelestialBody />
            <div style={{ position: "relative", zIndex: 1 }}>
              <Main theme={theme} />
            </div>
          </>
        )}
      </ThemeContext.Consumer>
    </ThemeContextProvider>
  );
}

export default App;
