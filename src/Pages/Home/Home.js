import Contact from "../../components/contact/Contact";
import "./Home.css";
import minhaFoto from "../../img/minha-foto.JPG";

const Home = () => {
  return (
    <div className="home">
      <div className="pagina-inicial">
        <div>
          <h2>Olá, sou o Renato</h2>
          <h1>UI/UX Design</h1>
          <p>
            Este é o lugar onde apresento minhas habilidades e projetos de
            desenvolvimento web.
          </p>
        </div>
        <div className="home-imagem">
          <img src={minhaFoto} alt="Minha Foto de Perfil" />
        </div>
      </div>
      <section id="contato-home">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
