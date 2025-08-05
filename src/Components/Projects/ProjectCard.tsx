import "./ProjectsCard.scss";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  linkName: string;
  projectLink: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  imageAlt,
  linkName,
  projectLink,
}: ProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="punchholes">
        <div className="punchhole"></div>
        <div className="punchhole"></div>
      </div>
      <div className="project-card-content">
        <div className="project-card-text">
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <a href={projectLink} target="_blank">{linkName}</a>
        </div>
        <div className="project-image">
          <img src={image} alt={imageAlt} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
