import "./header.css";
import Aldo from "../../images/aldo.svg";

const Header = () => {
  return (
    <div className="divPai">
      <div className="aldo">
        <img src={Aldo} alt="aldo" />
      </div>
      <div className="texto1">
        {" "}
        <div className="titulo-principal">
          {" "}
          <h1>Tênis</h1>
          <h2>Para todas as idades</h2>
        </div>
        <div className="experimental">
          {" "}
          <h3>Agende uma aula experimental com um de nossos professores.</h3>
          <h4>
            <a href="https://api.whatsapp.com/send?phone=5506481397337">
              Quero uma aula experimental grátis!
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};
export default Header;
