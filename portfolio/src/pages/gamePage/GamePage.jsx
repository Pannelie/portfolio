import "./GamePage.css";
import CircleNav from "../../components/circleNav/CircleNav";

export default function GamePage() {
  return (
    <div className="page">
      <div className="navigation">
        <CircleNav />
      </div>

      <main className="main-container">
        <h1>game</h1>
      </main>
    </div>
  );
}
