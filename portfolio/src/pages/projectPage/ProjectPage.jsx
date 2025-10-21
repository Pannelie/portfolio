import { useParams } from "react-router-dom";
import projects from "../../data/projects.json";
import CircleNav from "../../components/circleNav/CircleNav";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p>Projektet hittades inte</p>;

  return (
    <div className="page project-page">
      <CircleNav />
      <main className="main-container">
        <h1>{project.name}</h1>
        <h2>Live Demo</h2>
        <iframe
          src={project.live}
          width="100%"
          height="500"
          style={{ border: "1px solid #ccc", borderRadius: "8px" }}
          title="Live demo"
        ></iframe>
        <p>{project.description}</p>
        <img src={project.image} alt={project.name} />

        <p>
          <a href={project.github} target="_blank" rel="noreferrer">
            Se koden på GitHub
          </a>
        </p>
      </main>
    </div>
  );
}
