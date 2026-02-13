import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "home";
    return (
      <Fade top duration={600} distance="10px">
        <SeoHeader />
        <div
          className="header-wrapper"
          style={{
            backgroundColor: `${theme.body}dd`,
          }}
        >
          <header className="header">
            <NavLink to={link} tag={Link} className="logo">
              <span style={{ color: theme.imageHighlight }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.imageHighlight }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.imageHighlight }}>/&gt;</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <NavLink
                  to="/home"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold", color: "#06B6D4" }}
                  className="nav-link"
                  style={{ color: theme.secondaryText }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold", color: "#06B6D4" }}
                  className="nav-link"
                  style={{ color: theme.secondaryText }}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold", color: "#06B6D4" }}
                  className="nav-link"
                  style={{ color: theme.secondaryText }}
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold", color: "#06B6D4" }}
                  className="nav-link"
                  style={{ color: theme.secondaryText }}
                >
                  Projects
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/opensource"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold", color: "#06B6D4" }}
                  className="nav-link"
                  style={{ color: theme.secondaryText }}
                >
                  Open Source
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold", color: "#06B6D4" }}
                  className="nav-link"
                  style={{ color: theme.secondaryText }}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
