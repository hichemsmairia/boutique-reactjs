import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import Contact from "./components/contact";

ReactDOM.render(
  <BrowserRouter>
    <Contact />
  </BrowserRouter>,

  document.getElementById("root")
);
