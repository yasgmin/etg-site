import "./header.css";
import Aldo from "../../../images/aldo.svg";

const Header = () => {
  return (
    <div>
      <div className="aldo">
        <img src={Aldo} alt="aldo" />
      </div>
      <div>
        <h1 className="título">Tênis</h1>
      </div>
    </div>
  );
};
export default Header;
