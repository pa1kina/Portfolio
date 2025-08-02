import "./Projects.scss";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-title">
        <p>check out my</p>
        <h1>Projects</h1>
      </div>
      <ProjectCard />
    </div>
  );
};

export default Projects;
