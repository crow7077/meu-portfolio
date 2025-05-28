const ProjectCard = ({ title, description, link }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", width: "250px" }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Ver Projeto
      </a>
    </div>
  );
};

export default ProjectCard;