import ProjectCard from "../../components/ProjectCard";
import projects from "../../data/projects.json";
import CircleNav from "../../components/circleNav/CircleNav";
import "./AllProjectsPage.css";

export default function AllProjectsPage() {
  return (
    <div className="page all-projects-page">
      <div className="navigation">
        <CircleNav />
      </div>
      <main className="main-container">
        <h1>Mina projekt</h1>
        <div className="projects-list">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </main>
    </div>
  );
}
