import React, { useContext } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";
import { useTranslation } from "react-i18next";
import SeoHeader from "../seoHeader/SeoHeader";
import ThemeToggle from "../themeToggle/ThemeToggle";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";

export default function Header({ theme }) {
  const { portfolio } = useContext(LanguageContext);
  const { t } = useTranslation();
  const link = portfolio.settings.isSplash ? "/splash" : "home";
  return (
    <Fade top duration={600} distance="10px">
      <SeoHeader />
      <div className="header-wrapper">
        <header className="header">
          <NavLink to={link} tag={Link} className="logo">
            <span style={{ color: theme.imageHighlight }}> &lt;</span>
            <span className="logo-name" style={{ color: theme.imageHighlight }}>
              {portfolio.greeting.logo_name}
            </span>
            <span style={{ color: theme.imageHighlight }}>/&gt;</span>
          </NavLink>

          {/* Desktop only: switchers next to nav */}
          <div className="header-toggle-desktop">
            <LanguageSwitcher theme={theme} />
            <ThemeToggle />
          </div>

          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <NavLink
                to="/home"
                tag={Link}
                activeStyle={{ fontWeight: "bold", color: theme.imageHighlight }}
                className="nav-link"
                style={{ color: theme.secondaryText }}
              >
                {t("nav.home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                tag={Link}
                activeStyle={{ fontWeight: "bold", color: theme.imageHighlight }}
                className="nav-link"
                style={{ color: theme.secondaryText }}
              >
                {t("nav.education")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                tag={Link}
                activeStyle={{ fontWeight: "bold", color: theme.imageHighlight }}
                className="nav-link"
                style={{ color: theme.secondaryText }}
              >
                {t("nav.experience")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                tag={Link}
                activeStyle={{ fontWeight: "bold", color: theme.imageHighlight }}
                className="nav-link"
                style={{ color: theme.secondaryText }}
              >
                {t("nav.projects")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                tag={Link}
                activeStyle={{ fontWeight: "bold", color: theme.imageHighlight }}
                className="nav-link"
                style={{ color: theme.secondaryText }}
              >
                {t("nav.contact")}
              </NavLink>
            </li>
            {/* Mobile only: switchers at bottom of menu */}
            <li className="menu-toggles">
              <div className="menu-toggles-inner">
                <LanguageSwitcher theme={theme} />
                <ThemeToggle />
              </div>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  );
}
