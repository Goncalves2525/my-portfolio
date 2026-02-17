import React, { useContext } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { LanguageContext } from "../../context/LanguageContext";
import { useTranslation } from "react-i18next";
import SocialMedia from "../socialMedia/SocialMedia";

export default function Footer(props) {
  const { portfolio } = useContext(LanguageContext);
  const { t } = useTranslation();
  return (
    <div className="footer-div">
      <Fade bottom duration={600} distance="10px">
        <SocialMedia theme={props.theme} />
        <p
          className="footer-text"
          style={{ color: props.theme.secondaryText, marginTop: "1rem" }}
        >
          &copy; {new Date().getFullYear()} {portfolio.greeting.title}.{" "}
          {t("footer.copyright")}
        </p>
      </Fade>
    </div>
  );
}
