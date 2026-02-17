import React, { createContext, Component } from "react";
import { ThemeProvider } from "styled-components";
import { darkNavyTheme, dayTheme } from "../theme";

export const ThemeContext = createContext({
  theme: darkNavyTheme,
  mode: "night",
  toggleTheme: () => {},
});

export class ThemeContextProvider extends Component {
  constructor(props) {
    super(props);
    const savedMode = localStorage.getItem("themeMode");
    const mode = savedMode === "day" ? "day" : "night";
    this.state = { mode };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  componentDidMount() {
    document.documentElement.setAttribute(
      "data-theme",
      this.state.mode
    );
  }

  toggleTheme() {
    this.setState(
      (prevState) => {
        const newMode = prevState.mode === "night" ? "day" : "night";
        return { mode: newMode };
      },
      () => {
        localStorage.setItem("themeMode", this.state.mode);
        document.documentElement.setAttribute(
          "data-theme",
          this.state.mode
        );
      }
    );
  }

  render() {
    const theme = this.state.mode === "night" ? darkNavyTheme : dayTheme;
    const contextValue = {
      theme,
      mode: this.state.mode,
      toggleTheme: this.toggleTheme,
    };

    return (
      <ThemeContext.Provider value={contextValue}>
        <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
      </ThemeContext.Provider>
    );
  }
}
