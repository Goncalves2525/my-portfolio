import React, { useContext } from "react";
import "./SocialMedia.css";
import { LanguageContext } from "../../context/LanguageContext";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function SocialMedia(props) {
  const { portfolio } = useContext(LanguageContext);
  return (
    <div className="social-media-div">
      {portfolio.socialMediaLinks
        .filter((media) => media.display !== false)
        .map((media, i) => {
          // Use iconType if provided, otherwise default to 'fab' (brands)
          const iconClass = media.iconType === 'solid' ? 'fas' : 'fab';
          return (
            <a
              key={i}
              href={media.link}
              className={`icon-button`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper {...media} {...props}>
                <i className={`${iconClass} ${media.fontAwesomeIcon}`}></i>
              </IconWrapper>
              {/* <span></span> */}
            </a>
          );
        })}
    </div>
  );
}
