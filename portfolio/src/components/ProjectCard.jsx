import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.name} />
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <Link to={`/projects/${project.id}`}>Se mer</Link>
    </div>
  );
}
