import "./Hero.css";
import Image from "../image/Image";

export default function Hero({ title, text }) {
  return (
    <section className="hero">
      <h1 className="hero__title">{title}</h1>
      <Image />
      <p className="hero__text">{text}</p>
    </section>
  );
}
