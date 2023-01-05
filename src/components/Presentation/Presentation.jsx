import React from "react";
import Styles from "./Presentation.module.css";
import me from "../../images/gabriel.jpg";

const Presentation = () => {
  return (
    <div className={Styles.Container}>
      <div className={Styles.Me}>
        <h1 className={Styles.Title}>
          Hi ✋, I am <h1 className={Styles.Title2}>Gabriel Córdoba</h1>
        </h1>
        <img className={Styles.MeImage} src={me} alt="me"></img>
      </div>
      <div className={Styles.Me}>
      <h1 className={Styles.Subtitle}>Full Stack Developer</h1>
      <a
        className={Styles.CV}
        Target="_blank"
        href="https://drive.google.com/file/d/1ues0NTvacqKbJau7R8sLJJjqboS8w_zd/view"
      >
        DOWNLOAD MY CV
      </a></div>
    </div>
  );
};

export default Presentation;
