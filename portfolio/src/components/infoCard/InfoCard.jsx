import "./InfoCard.css";
import Image from "../image/Image";

export default function InfoCard() {
  const title = `Hej, Annelie här!`;
  const subtitle = `... Och vem är det kanske du undrar?`;
  const text = `Kort sammanfattat din framtida frontendutvecklare, den längre versionen hittar du i menyn. Där hittar du även mer information om vad jag haft för tidigare projekt och kontaktuppgifter. När du spanat in allt roligt om mig, passa på att spela ett spel a´la "växtglädje"`;

  return (
    <>
      <section className="hero-card">
        <div className="hero-card__image-box">
          <Image />
        </div>
        <div className="hero-card__content">
          <h1 className="hero-card__title">{title}</h1>
          <h2 className="hero-card__subtitle">{subtitle}</h2>
        </div>
      </section>
      <section className="info-card">
        <p className="info-card__text">{text}</p>
      </section>
    </>
  );
}
