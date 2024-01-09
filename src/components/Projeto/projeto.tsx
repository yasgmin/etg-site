import "./projeto.css";
import prot from "../../images/projeto.png";

const Projeto = () => {
  return (
    <div className="projetoPai">
      <section className="title">
        {" "}
        <h1>Projeto Social</h1>
        <p></p>
      </section>
      <div className="imagemP">
        <img src={prot} alt="Projeto Social" />
      </div>
      <div className="tituProjeto">
        {" "}
        <h2>
          Em maio, o Projeto Social de Tênis "Coração Gigante" alcança um marco
          significativo, completando cinco anos de dedicação e impacto positivo
          na comunidade. Desde o seu início, o projeto tem sido um farol de
          esperança, proporcionando oportunidades e transformando a vida de 26
          crianças.
        </h2>
      </div>
    </div>
  );
};

export default Projeto;
