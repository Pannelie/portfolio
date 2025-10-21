import React from "react";
import "./skillSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CvItem from "../cvItem/CvItem";

export default function SkillSection({ title, skills, icon }) {
  return (
    <section className="about__skill-section">
      <section className="about__skill-circle">
        <FontAwesomeIcon icon={icon} className="about__skill-icon" />
      </section>
      <h2 className="about__skill-title">{title}</h2>
      <ul className="about__skill-list">
        {skills.map((skill, index) => (
          <CvItem key={index} title={skill} />
        ))}
      </ul>
    </section>
  );
}
