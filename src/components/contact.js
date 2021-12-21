import { useState, useEffect } from "react";
// la variable email possede une unique fonction capable de mettre
// a jour cette dernire , elle s'appelle setEmail .
//la variable email possede une valeur par default c'est
function Contact() {
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState(0);
  useEffect(
    () => console.log("ahla w sahla bik fel home"), [email]);
  return (
    <div>
      <h1
      style={{
        color:"red",
        textDecoration:"underline"
      }}
      >contact page</h1>
      <p>
        What Makes a Great Contact Us Page? · They explain why a visitor should
        contact you and describe how you can help to solve your visitors' ...
      </p>
      <form>
        <div>l'adress email est : {email}</div>
        <div>le numero telephonique est : {telephone}</div>
        <label>
          email :{" "}
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="email"
          />
        </label>

        <label>
          Telphone :{" "}
          <input
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            type="number"
            placeholder="number"
          />
        </label>
      </form>
    </div>
  );
}

export default Contact;
