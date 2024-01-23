import "../../components/Footer/footer.css";
import Whats from "../../images/whatsapp.svg";
import Insta from "../../images/instagram.svg";

const Footer = () => {
  return (
    <div className="footerclass">
      <div className="endereco">
        Endereço: R. 04 n°49 - QD. 02 LT."O" PQ. DOS BURITIS - RIO VERDE GO
      </div>
      <div className="contact">
        <div className="contato">Entre em contato conosco:</div>
        <a href="https://api.whatsapp.com/send?phone=5506481397337">
          <img src={Whats} alt="whatsapp" />
        </a>
        <a href="https://www.instagram.com/escoladetenisgianotti/">
          <img src={Insta} alt="Instagram" />
        </a>
      </div>
      <div className="dev">
        Desenvolvido por:{" "}
        <span>
          <a
            href="https://www.instagram.com/yasmingdev/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Yasmin Gonçalves.
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
