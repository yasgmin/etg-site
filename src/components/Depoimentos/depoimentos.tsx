import "./depoimentos.css";
import Alunos from "../../images/alunos.svg";
import { Swiper, SwiperSlide } from "swiper/react";

const data = [
  { id: "1", string: "" },
  { id: "2", string: "" },
  { id: "3", string: "" },
  { id: "4", string: "" },
  { id: "5", string: "" },
];

const Depoimentos = () => {
  return (
    <div>
      <div className="titulodepoimento">
        <h1>
          Depoimentos dos
          <br />
          <span className="alunitos">Nossos Alunos</span>
          <p></p>
        </h1>
      </div>
      <Swiper>
        {data.map(() => (
          <SwiperSlide></SwiperSlide>
        ))}
      </Swiper>
      <div className="depoimentos3">
        <h2></h2>
        {/* <img src={Alunos} alt="Alunos" /> */}
      </div>
    </div>
  );
};

export default Depoimentos;
