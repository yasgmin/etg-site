import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import Apresentacao from "./components/Apresentacao/apresentacao";
import Projeto from "./components/Projeto/projeto";
import Depoimentos from "./components/Depoimentos/depoimentos";
import Carousel from "./components/Carousel";
import Forms from "./components/Forms/forms";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Apresentacao />
      <Projeto />
      <Depoimentos />
      <Carousel />
      <Forms />
      <Footer />
    </div>
  );
}

export default App;
