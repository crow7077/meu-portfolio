import "./Contact.css"

const Contact = () => {
  return (
    <div className="footer-contact">
      <h1>Contato</h1>
      <p>
        Ficaria feliz em discutir novas oportunidades ou responder suas
        perguntas.
      </p>
      <p>Email: seu.renatonj0489@gmail.com</p>
      <p>Telefone: (48) 98875-6333</p>
      <p>
        LinkedIn:{"  "}
        <a
          href="https://www.linkedin.com/in/renato-nunes-junior-3a371029b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Perfil do Linkedin
        </a>
      </p>
      {/* Adicione um formulário de contato se desejar */}
    </div>
  );
};

export default Contact;