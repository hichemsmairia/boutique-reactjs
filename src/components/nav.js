import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/contact">contacter nous </Link>
        </li>
        <li>
          <Link to="/about"> propos </Link>
        </li>
        <li>
          <Link to="/home"> accuille </Link>
        </li>
        <li>
        
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
