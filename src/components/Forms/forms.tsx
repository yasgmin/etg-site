import { useState } from "react";
import "../../components/Forms/forms.css";
import emailjs from "@emailjs/browser";

const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_2lbtpfg",
        "template_f567v1n",
        templateParams,
        "joGBI00NlMzNPprE4"
      )
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("ERRO", err);
        }
      );
  };

  return (
    <div className="container2">
      <form className="form" onSubmit={sendEmail}>
        <h1 className="title">
          Agende agora sua aula <br />
          experimental!
        </h1>
        <input
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input
          className="textarea"
          placeholder="Digite seu telefone e o motivo para contato"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Forms;
