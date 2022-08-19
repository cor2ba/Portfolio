import React from "react";
import Styles from "./Presentation.module.css";
import me from "../../images/gabriel.jpg";

const Presentation = () => {
  return (
    <div className={Styles.Container}>
      <div className={Styles.Me}>
        <h1 className={Styles.Title}>
          Hi ✋, I am <h1 className={Styles.Title2}>Gabriel Cordoba</h1>
        </h1>
        <img className={Styles.MeImage} src={me} alt="me"></img>
      </div>
      <div className={Styles.Me}>
      <h1 className={Styles.Subtitle}>Full-Stack Developer</h1>
      <a
        className={Styles.CV}
        Target="_blank"
        href="https://docs.google.com/document/d/1Db06ihjQTtjG_IH-fSBIRdyYg60ubOcU4OTLCQLYPpw/edit?usp=sharing"
      >
        DOWNLOAD MY CV
      </a></div>
    </div>
  );
};

export default Presentation;
