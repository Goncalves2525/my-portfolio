import React, { useContext } from "react";
import "./Talks.css";
import TalkCard from "../../components/talkCard/TalkCard";
import { LanguageContext } from "../../context/LanguageContext";

export default function Talks() {
  const { portfolio } = useContext(LanguageContext);
  const { talkSection } = portfolio;
  return (
    <div className="main" id="talks">
      <div className="talk-header">
        <h1 className="talk-header-title">{talkSection.title}</h1>
        <p className="subTitle talk-header-subtitle">{talkSection.subtitle}</p>
        {talkSection.talks.map((talk) => {
          return (
            <TalkCard
              talkDetails={{
                title: talk.title,
                subtitle: talk.subtitle,
                slides_url: talk.slides_url,
                event_url: talk.event_url,
                image: talk.image,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
