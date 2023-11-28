import React from "react";
import "./index.css";

const ToTop = () => {
  const TOTOPIMG = require("@site/static/home-img/top.png").default;

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <img src={TOTOPIMG} className="to-top-img" onClick={handleToTop} />;
};

export default ToTop;
