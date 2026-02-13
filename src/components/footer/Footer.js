import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import SocialMedia from "../socialMedia/SocialMedia";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade bottom duration={600} distance="10px">
        <SocialMedia theme={props.theme} />
        <p
          className="footer-text"
          style={{ color: props.theme.secondaryText, marginTop: "1rem" }}
        >
          &copy; {new Date().getFullYear()} {greeting.title}. All rights
          reserved.
        </p>
      </Fade>
    </div>
  );
}
