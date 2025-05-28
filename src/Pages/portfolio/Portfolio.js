import ProjectCard from "../../components/ProjectCard/ProjectCard"; 

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Projeto A",
      description: "Descrição breve do Projeto A.",
      link: "https://link-projeto-a.com",
    },
    {
      id: 2,
      title: "Projeto B",
      description: "Descrição breve do Projeto B.",
      link: "https://link-projeto-b.com",
    },
    // ... mais projetos
  ];

  return (
    <div>
      <h1>Meus Trabalhos</h1>
      <p>Aqui você encontrará uma amostra dos meus projetos e habilidades.</p>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
