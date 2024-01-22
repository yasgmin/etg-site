import { useState } from "react";
import "/forms.css";
import emailjs from "@emailjs/browser";

const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || telephone === "")
      alert("Preencha todos os campos");
    return;
  }

  const templateParams = {
    from_name: name,
    telephone: telephone,
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
        setTelephone("");
      },
      (err) => {
        console.log("ERRO");
      }
    );

  return (
    <div className="container">
      <h1 className="title">
        Agende agora sua aula <br />
        experimental!
      </h1>

      <form className="form" onSubmit={() => {}}>
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
          placeholder="Digite seu telefone"
          onChange={(e) => setTelephone(e.target.value)}
          value={telephone}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Forms;
