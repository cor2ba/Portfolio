import React from "react";
import Styles from "./Presentation.module.css";

const Presentation = () => {
  return (
    <div className={Styles.Container}>
      <h1 className={Styles.Title}>Hi ✋, I´m Gabriel Cordoba.</h1>
      <h1 className={Styles.Subtitle}>Full-Stack Developer</h1>
      <a
        className={Styles.CV}
        Target="_blank"
        href="https://docs.google.com/document/d/1Db06ihjQTtjG_IH-fSBIRdyYg60ubOcU4OTLCQLYPpw/edit?usp=sharing"
      >
        Download my CV
      </a>
    </div>
  );
};

export default Presentation;
