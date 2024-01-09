import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import Apresentacao from "./components/Apresentacao/apresentacao";
import Projeto from "./components/Projeto/projeto";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Apresentacao />
      <Projeto />
    </div>
  );
}

export default App;
