import "./Projects.scss";
import ProjectCard from "./ProjectCard";
import projectData from "./projects-info.json";


const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-title">
          <div>
            <p>check out my</p>
            <h1>PROJECTS</h1>
          </div>
          <div className="projects-folder">
            <a href="https://vimeo.com/showcase/11524942" target="_blank">
              <img src="/images/folder-icon-macos.webp"></img>
              <p>video works</p>
            </a>
            <a href="/design">
              <img src="/images/folder-icon-macos.webp"></img>
              <p>art & design</p>
            </a>
          </div>
        </div>
        <div className="projects-grid">
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              imageAlt={project.imageAlt}
              linkName={project.linkName}
              projectLink={project.projectLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
