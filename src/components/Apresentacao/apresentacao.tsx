import "./apresentacao.css";
import Tio from "../../images/tio 2.svg";

const Apresentacao = () => {
  return (
    <div className="papis">
      <div className="esquerda">
        {" "}
        <h1>
          A maior <br />
          escola de tênis
          <br /> de Rio Verde
          <p></p>
        </h1>
      </div>
      <div className="conheca-escola">
        <p></p>
        <img src={Tio} alt="aldo" />
        <div>
          {" "}
          <h1>
            Conheça a <br />
            <span>Escola de Tênis Gianotti</span>
            <p></p>
          </h1>
          <h2>
            A escola de tênis Gianotti nasceu em 2017 fundada por Aldo Gianotti.
            Ele decidiu investir no tênis brasileiro devido a sua vasta
            experiência jogando. Com uma metodologia para todas as idades, a
            escola de tênis <span className="span2">Gianotti </span>é
            desenvolvida e inovada a cada ano de operação.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Apresentacao;
