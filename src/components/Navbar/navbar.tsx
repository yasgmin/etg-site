import "./navbar.css";
import Logo from "../../images/logo_ETG-removebg-preview 1.png";
import background from "../../images/bck.png";

const Navbar = () => {
  return (
    <header>
      <div className="fundo">
        <img src={background} alt="fundo" />
      </div>
      <div className="logo">
        <img src={Logo} alt="Logo ETG" />
      </div>
      <div className="lista">
        <ul>
          <li>
            <a href="#meet">Sobre</a>
          </li>
          <li>
            <a href="#endereco">Aula experimental</a>
          </li>
          <li>
            <a href="#endereco">Endereço</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
