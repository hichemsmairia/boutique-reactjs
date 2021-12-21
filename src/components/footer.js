import { useState, useEffect, useContext } from "react";

import data from "../mon_context";

function Footer() {
  const [adress, setAdress] = useState("");
  const chaine = useContext(data);
  useEffect(() => {
    console.log("useEffect");
  }, [adress]);
  return (
    <footer>
      <ol>
        <li>adress : {adress}</li>
        <li>email : email@gmail.com</li>
        <li>num tel : +216 55 555 555</li>
        <input
          type="text"
          onChange={function delta(e) {
            setAdress(e.target.value);
          }}
        />
      </ol>
      <p>{chaine}</p>
    </footer>
  );
}

export default Footer;
