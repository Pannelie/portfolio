import "./heroCard.css";
import Image from "../../components/image/Image";

export default function HeroCard() {
  return (
    <section className="hero-card--new">
      <div className="hero-card__image-container">
        <Image />
      </div>
      <div className="hero-card__hero-content">
        <h1 className="hero-card__hero-title">Hej, jag heter Annelie</h1>
        <p className="hero-card__hero-text">Jag studerar inom webutveckling och är er framtida utvecklare.</p>
      </div>
    </section>
  );
}
