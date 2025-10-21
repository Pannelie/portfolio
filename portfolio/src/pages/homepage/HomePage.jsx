import CircleNav from "../../components/circleNav/CircleNav";
// import Hero from "../../components/hero/Hero";
import InfoCard from "../../components/infoCard/InfoCard";

export default function HomePage() {
  return (
    <div className="page home-page">
      <div className="navigation">
        <CircleNav />
      </div>

      <main className="main-container">
        <InfoCard />
      </main>
    </div>
  );
}
