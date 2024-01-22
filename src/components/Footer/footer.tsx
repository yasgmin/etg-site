import "../../components/Footer/footer.css";
import Whats from "../../images/whatsapp.svg";
import Insta from "../../images/instagram.svg";

const Footer = () => {
  return (
    <div className="footerclass">
      <div className="endereco">
        R. Luiza Matiello Hanser, 425 - Jardim Pagliato, Sorocaba - SP,
        18046-166
      </div>
      <div className="contact">
        <div className="contato">Entre em contato conosco:</div>
        <img src={Whats} alt="whatsapp" />
        <img src={Insta} alt="Instagram" />
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
