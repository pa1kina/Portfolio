import "./Projects.scss";
import ProjectCard from "./ProjectCard";
import projectData from "./projects-info.json";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-title">
        <p>check out my</p>
        <h1>PROJECTS</h1>
      </div>
      <div className="projects-grid">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            imageAlt={project.imageAlt}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
