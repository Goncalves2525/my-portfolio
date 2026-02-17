import React, { createContext, Component } from "react";
import i18n from "../i18n/config";
import * as portfolioEN from "../portfolio/portfolio.en";
import * as portfolioPT from "../portfolio/portfolio.pt";

const portfolios = { en: portfolioEN, pt: portfolioPT };

function getDefaultLanguage() {
  const saved = localStorage.getItem("language");
  if (saved && portfolios[saved]) return saved;
  const browser = navigator.language.split("-")[0];
  return portfolios[browser] ? browser : "en";
}

export const LanguageContext = createContext({
  language: "en",
  portfolio: portfolioEN,
  changeLanguage: () => {},
});

export class LanguageContextProvider extends Component {
  constructor(props) {
    super(props);
    const language = getDefaultLanguage();
    this.state = { language };
    i18n.changeLanguage(language);
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(newLanguage) {
    this.setState({ language: newLanguage }, () => {
      localStorage.setItem("language", newLanguage);
      i18n.changeLanguage(newLanguage);
    });
  }

  render() {
    const portfolio = portfolios[this.state.language] || portfolioEN;
    const contextValue = {
      language: this.state.language,
      portfolio,
      changeLanguage: this.changeLanguage,
    };

    return (
      <LanguageContext.Provider value={contextValue}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
