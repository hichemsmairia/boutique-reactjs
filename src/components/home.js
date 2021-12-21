import { useEffect, useState } from "react";
import Opinion from "./opinion";

function Home() {
  /*

hedhi lbalsa elli tekteb feha les hooks ! (useState/useEffect)


  */
  const [text, setText] = useState("");
  return (
    <div>
      <h1>home page</h1>
      <p>
        Comment Faire Votre Site Web : 100 Designs de Site et Éditeur de Site
        Intuitif. Modèles Personnalisables. Simple et Efficace. Rendu
        Professionnel. Stockage Illimité. Hébergement Top Qualité. Solution
        Mobile. Sans Engagement. Assistance 24h/7.
      </p>
      <div>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="opinion"
        />
      </div>
      <Opinion data={text} />
    </div>
  );
}

export default Home;
