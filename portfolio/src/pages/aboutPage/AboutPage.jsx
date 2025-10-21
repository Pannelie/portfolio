import "./AboutPage.css";
import { education, experience, backendSkills, frontendSkills } from "../../data/cv";
import CvItem from "../../components/cvItem/CvItem";
import CircleNav from "../../components/circleNav/CircleNav";
import InfoCard from "../../components/infoCard/InfoCard";
import HeroCard from "../../components/heroCard/HeroCard";
import SkillSection from "../../components/skillSection/SkillSection";
import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  const aboutText = [
    "Under utbildningen på Folkuniversitetet har jag byggt projekt med HTML, CSS och JavaScript, och arbetat med React och Node.js. Jag har även erfarenhet av molnbaserade lösningar med AWS, inklusive Lambda, DynamoDB och hosting av statiska webbplatser via S3.",

    "Just nu utforskar jag AI och TypeScript, och ser fram emot att kombinera mina tekniska kunskaper med kreativt frontend-arbete. Tillsammans med mina listade frontend- och backend-färdigheter ger det mig en bra grund för att bidra i praktiska projekt och utveckla digitala lösningar.",
  ];

  const slogan = "Jag tycker det är som roligast när jag får klura på nya lösningar och skapa användarvänliga webbupplevelser.";

  return (
    <div className="page about-page">
      <div className="navigation">
        <CircleNav />
      </div>

      <main className="main-container">
        <HeroCard />
        <section className="about-cv__sections">
          <section className="about-cv__text-field">
            {aboutText.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
          <SkillSection title={"Frontend"} skills={frontendSkills} icon={faCode} />
          <SkillSection title={"Backend"} skills={backendSkills} icon={faDatabase} />
          <section className="about-cv__section">
            <h2>Utbildning</h2>
            <ul className="about-cv__list">
              {education.map((edu, index) => (
                <CvItem key={index} title={edu.program} subtitle={edu.school} years={edu.years} />
              ))}
            </ul>
          </section>
          <section className="about-cv__section">
            <h2>Erfarenhet</h2>
            <ul className="about-cv__list">
              {experience.map((exp, index) => (
                <CvItem key={index} title={exp.role} subtitle={exp.description} />
              ))}
            </ul>
          </section>
        </section>
      </main>
    </div>
  );
}
